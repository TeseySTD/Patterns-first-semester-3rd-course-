from estate_factory import *

class EstateToBuyFactory(EstateFactory):
    def create_estate(self, type: str) -> RealEstate:
        e = self.estate_from_type(type)
        e.is_buyable = True
        e.is_rentable = False
        e.is_sellable = False
        return e