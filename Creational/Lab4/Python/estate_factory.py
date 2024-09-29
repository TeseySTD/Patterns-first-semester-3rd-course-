from abc import *
from real_estate import *
from apartment import *
from house import *
from room import *

class EstateFactory(ABC):
    @abstractmethod
    def create_estate(self, type: str) -> RealEstate:
        pass

    def estate_from_type(self, type: str) -> RealEstate:
        type_lower = type.lower()
        if type_lower == "apartment":
            return Apartment("", "",20, 300,"", 2)
        elif type_lower == "house":
            return House("", "",20, 300,"")
        elif type_lower == "room":
            return Room("", "",20, 300,"")
        else:
            raise ValueError(f"{type}: Wrong type of estate")