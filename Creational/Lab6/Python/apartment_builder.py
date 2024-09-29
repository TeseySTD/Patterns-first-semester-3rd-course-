from estate_builder import *
from apartment import Apartment

class ApartmentBuilder(EstateBuilder):
    def reset(self):
        self._estate = Apartment()

    def set_rooms_number(self, number):
        self._estate.rooms_number = number
        return self

    def set_heating_type(self, heating_type):
        self._estate.heating_type = heating_type
        return self