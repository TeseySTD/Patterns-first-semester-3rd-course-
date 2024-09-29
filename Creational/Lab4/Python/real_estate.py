import copy
from abc import *
from realtor import *

class RealEstate(ABC):
    def __init__(self, address, description, area, price, status):
        self.id = None
        self.address = address
        self.description = description
        self.area = area
        self.price = price
        self._status = "Unknown"
        self.status = status
        self.realtor = Realtor(1, "John Doe", "8 800 555 35 35", "example@gmail.com", 2)
        self.isRentable = False
        self.isBuyable = False
        self.isSellable = False

    @property
    def status(self):
        return self._status if self._status else "Unknown"

    @status.setter
    def status(self, value):
        if value in ["New", "Old", "Middle aged"]:
            self._status = value
        else:
            self._status = "Unknown"

    def __str__(self):
        return f"Id: {self.id}, Address: {self.address},\n Description: {self.description},\nArea: {self.area}, Price: {self.price}\nStatus: {self.status}\n{self.realtor}\n Rentable {self.isRentable}, Buyable {self.isBuyable}, Sellable: {self.isSellable}"
    
    @staticmethod
    def print_all_info_about_estates(real_estates):
        for real_estate in real_estates:
            print(str(real_estate))

    @abstractmethod
    def clone(self):
        pass
    
    @abstractmethod
    def shallow_copy(self):
        pass

    @abstractmethod
    def rent(self, customer, start_date, end_date):
        pass

    @abstractmethod
    def sell(self, customer):
        pass