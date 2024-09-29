from estate_factory import *

class EstateToSellFactory(EstateFactory):
    def create_estate(self, type: str) -> RealEstate:
        e = self.estate_from_type(type)
        e.is_buyable = False
        e.is_rentable = False
        e.is_sellable = True
        return e