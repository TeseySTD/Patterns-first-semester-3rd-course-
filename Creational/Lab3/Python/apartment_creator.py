from apartment import *
from real_estate_creator import *

class ApartmentCreator(RealEstateCreator):
    def create_estate(self):
        return Apartment("awd","awd","awd",10,"New", 3)