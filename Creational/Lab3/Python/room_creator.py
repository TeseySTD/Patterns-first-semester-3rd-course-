from room import *
from real_estate_creator import *

class RoomCreator(RealEstateCreator):
    def create_estate(self):
        return Room("awd","awd","awd",10,"New")