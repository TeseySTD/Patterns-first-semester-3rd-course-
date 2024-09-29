from estate_factory import *

class EstateToRentFactory(EstateFactory):
    def create_estate(self, type: str) -> RealEstate:
        e = self.estate_from_type(type)
        e.is_buyable = False
        e.is_rentable = True
        e.is_sellable = False
        return e