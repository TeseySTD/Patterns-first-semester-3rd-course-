from house import *
from real_estate_creator import *

class HouseCreator(RealEstateCreator):
    def create_estate(self):
        return House("awd","awd","awd",10,"New")