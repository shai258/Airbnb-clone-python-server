from mongoengine import *


class Space(EmbeddedDocument):
    _id = StringField()
    description = StringField(required=True)
    guests = IntField(required=True)
    beds = IntField(required=True)
    bedrooms = IntField(required=True)


class Booking(EmbeddedDocument):
    _id = StringField()
    checkin = StringField(required=True)
    checkout = StringField(required=True)


class Address(EmbeddedDocument):
    _id = StringField()
    country = StringField(required=True)
    city = StringField(required=True)
    street = StringField(required=True)
    number = IntField(required=True)
    lat = FloatField(required=True)
    lng = FloatField(required=True)


class Owner(Document):
    imageUrl = StringField(required=True)
    name = StringField(required=True)


class Review(EmbeddedDocument):
    _id = StringField()
    title = StringField(required=True)
    rating = FloatField(required=True)
    date = DateTimeField(required=True)
    content = StringField(required=True)
    userImgUrl = StringField(required=True)
    id = StringField(required=True)


class Homes(Document):
    v = IntField(db_field='__v')
    title = StringField(required=True)
    type = StringField(required=True)
    imgUrl = StringField(required=True)
    generalDesc = StringField(required=True)
    price = StringField(required=True)
    theSpace = EmbeddedDocumentField(Space)
    amenities = ListField(StringField(), required=True)
    bookings = ListField(EmbeddedDocumentField(Booking))
    address = EmbeddedDocumentField(Address, required=True)
    owner = DictField(ReferenceField(Owner, required=True))
    reviews = ListField(EmbeddedDocumentField(Review), required=True)
    similarHomes = ListField(StringField(), required=True)
