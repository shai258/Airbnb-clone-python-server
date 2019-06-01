# Airbnb-Clone - Final Full-Stack Project

#### name: Shai Oren

## Description
A clone website inspired by 'Airbnb' as a final full-stack project, which encases minimal functionality such as searching home and booking a home.

## Technologies
### Front
  JS ES6, React.js
### Back
Python 3.7, Flask, Mongoengine
### Database
MongoDB

## Functionality
**Search:** Search for homes by location, checkin, checkout.

 In addition search by clicking on city card or editors pick card.

**Results:** Open a Home by clicking on a  home card.

### Added Features
* booking a home.


## Setup and Installation
#### Note
Before running the project, you will need to have Node.js and NPM installed on your computer.
***

1. Open the `client` folder in the Command Line Terminal
2. Run the command: `npm i`
3. Open the `server` folder in other Terminal
4. Run the command: `python server.py`
5. In `client` terminal, run the command: `npm start`

The website should load automatically in the default browser.

## API
METHOD | PATH | RESULT 
- | - | - | -
`GET` | `/cities` | returns an array of all the cities objects in the db
`GET` | `/homes/<string:obj_id>` | returns a specific home object with the given id 
`GET` | `/homes/booking/<string:obj_id>/` | creates a new booking at a specific home, with dates passed as a query. returns whether a booking was successful or not.
`GET` | `/search/` | returns an array of all the homes that match the values passed in the query string.


### Models

#### City Model
```javascript

{
    "_id":"5c3e27c3e73b7726747c564c",
    "city":"london",
    "imgUrl":"https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large",
    "__v":0,
    "avgPrice":386
}
```

#### Home Model

```javascript
{
    "__v": 0,
    "_id": {
        "$oid": "5c2239a3d3cf7c04a4db3e0a"
    },
    "address": {
        "_id": {
            "$oid": "5c363d33274dbd1cdccf0d71"
        },
        "city": "london",
        "country": "england",
        "lat": 30.728746,
        "lng": 112.382644,
        "number": 13432423,
        "street": "redbridge"
    },
    "amenities": [
        "wifi",
        "kitchen",
        "tv",
        "aircon",
        "heating"
    ],
    "bookings": [
        {
            "_id": {
                "$oid": "5c363d33274dbd1cdccf0d70"
            },
            "checkin": {
                "$date": 1598486400000
            },
            "checkout": {
                "$date": 1598745600000
            }
        },
        {
            "checkin": "2019-04-01",
            "checkout": "2019-04-02"
        },
        {
            "checkin": "2019-04-03",
            "checkout": "2019-04-04"
        }
    ],
    "generalDesc": "his luxury Studio accommodation is equipped with a double bed, a kitchenette and a small lounge area.",
    "imgUrl": "https://a0.muscache.com/im/pictures/c3be634f-b568-47ad-a0d5-bb2362ea7627.jpg?aki_policy=xx_large",
    "owner": {
        "_id": {
            "$oid": "5c363d33274dbd1cdccf0d72"
        },
        "imageUrl": "http://i.pravatar.cc/150",
        "name": "segire group"
    },
    "price": "212",
    "reviews": [
        {
            "_id": {
                "$oid": "5c363d33274dbd1cdccf0d75"
            },
            "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "date": {
                "$date": 1547510400000
            },
            "id": "5c2239a3d3cf7c04a4db3a01",
            "rating": 2,
            "title": "the room was faboulous",
            "userImgUrl": "http://i.pravatar.cc/150"
        },
        {
            "_id": {
                "$oid": "5c363d33274dbd1cdccf0d74"
            },
            "content": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "date": {
                "$date": 1516320000000
            },
            "id": "5c2239a3d3cf7c04a4db3a02",
            "rating": 2,
            "title": "great experience",
            "userImgUrl": "http://i.pravatar.cc/150"
        },
        {
            "_id": {
                "$oid": "5c363d33274dbd1cdccf0d73"
            },
            "content": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "date": {
                "$date": 1519257600000
            },
            "id": "5c2239a3d3cf7c04a4db3a03",
            "rating": 1,
            "title": "medicore",
            "userImgUrl": "http://i.pravatar.cc/150"
        }
    ],
    "similarHomes": [
        "5c2239a3d3cf7c04a4db3e1c",
        "5c2239a3d3cf7c04a4db3e2d"
    ],
    "theSpace": {
        "_id": {
            "$oid": "5c363d33274dbd1cdccf0d6f"
        },
        "bedrooms": 1,
        "beds": 2,
        "description": "The bathroom has toilet, bath and shower facilities. . This studio is 5-star quality. Located in Gants Hill (central line) 35-45 minutes from central London.",
        "guests": 3
    },
    "title": "Independent Luxury studio",
    "type": "LOFT"
}
```