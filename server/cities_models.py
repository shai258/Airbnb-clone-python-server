from mongoengine import *


class Cities(Document):
    city = StringField(required=True)
    imgUrl = StringField(required=True)
    v = IntField(db_field='__v')
    avgPrice = IntField(required=True)

