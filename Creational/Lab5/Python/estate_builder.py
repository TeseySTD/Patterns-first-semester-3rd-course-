from abc import *
class EstateBuilder(ABC):
    def __init__(self):
        self.reset()

    @abstractmethod
    def reset(self):
        pass

    def get_estate(self):
        estate = self._estate.clone()
        self.reset()
        return estate

    def make_sellable(self):
        self._estate.is_sellable = True
        return self

    def make_buyable(self):
        self._estate.is_buyable = True
        return self

    def make_rentable(self):
        self._estate.is_rentable = True
        return self

    def add_realtor(self, realtor):
        self._estate.realtor = realtor
        return self

    def set_status(self, status):
        self._estate.status = status
        return self

    def set_price(self, price):
        self._estate.price = price
        return self

    def set_area(self, area):
        self._estate.area = area
        return self

    def set_description(self, description):
        self._estate.description = description
        return self

    def set_address(self, address):
        self._estate.address = address
        return self

    def set_furnished(self):
        self._estate.furnished = True
        return self

    def set_parking(self):
        self._estate.parking = True
        return self

    def set_balcony(self):
        self._estate.balcony = True
        return self

    def set_elevator(self):
        self._estate.elevator = True
        return self

    def set_air_conditioning(self):
        self._estate.air_conditioning = True
        return self

    def set_utilities_included(self):
        self._estate.is_utilities_included = True
        return self
