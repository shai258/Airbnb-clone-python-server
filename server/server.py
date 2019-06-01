from flask import Flask, request, jsonify

from flask_mongoengine import MongoEngine
from datetime import datetime

from home_models import *
from cities_models import *

app = Flask(__name__)
app.config.from_object(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'airbnbclone',
    'host': 'localhost',
    'port': 27017,
}

mongo = MongoEngine(app)


def occupied_room(first_booking, second_booking):
    if type(first_booking.checkin)==type(second_booking['checkin']):
        first_checkin = datetime.fromisoformat(first_booking.checkin)
        first_checkout = datetime.fromisoformat(first_booking.checkout)
    else:
        first_checkin = first_booking.checkin
        first_checkout = first_booking.checkout

    second_checkin = datetime.fromisoformat(second_booking['checkin'])
    second_checkout = datetime.fromisoformat(second_booking['checkout'])
    return first_checkin < second_checkout and first_checkout > second_checkin


@app.route('/cities')
def favorite_cities():
    cities = Cities.objects
    return jsonify(cities)


@app.route('/search/')
def search_page():
    location = request.args.get('location').lower()
    checkin = request.args.get('checkin')
    checkout = request.args.get('checkout')
    homes_lst = Homes.objects(Q(address__country=location) | Q(address__city=location), bookings__checkin__not__contains=checkin, bookings__checkout__not__contains=checkout)
    return jsonify(homes_lst)


@app.route('/homes/<string:obj_id>')
def home_represent(obj_id):
    home = Homes.objects.with_id(obj_id)
    return jsonify(home)


@app.route('/homes/booking/<string:obj_id>/')
def book_home(obj_id):
    try:
        temp_booking = {
                        'checkin': request.args.get('checkin'),
                        'checkout': request.args.get('checkout')
                        }
        home = Homes.objects.with_id(obj_id)
        for current_booking in home.bookings:
            if occupied_room(current_booking, temp_booking):
                return jsonify(is_occupied=True)
        new_booking = Booking(checkin=request.args.get('checkin'), checkout=request.args.get('checkout'))
        home.update(add_to_set__bookings=new_booking)
        return jsonify(is_occupied=False)

    except Exception as error:
        return f'get_home error: {error}'


@app.errorhandler(500)
def internal_error(error):
    return jsonify(error=f'internal server error: {error}')


@app.errorhandler(404)
def not_found(error):
    return jsonify(error=f'page not found: {error}')


if __name__ == '__main__':
    app.run(debug=True)
