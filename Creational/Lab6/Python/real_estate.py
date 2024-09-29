import copy
from abc import *
from realtor import *
from agency_object import *
from datetime import datetime

class RealEstate(AgencyObject, ABC):
    def __init__(self, address, description, area, price, status):
        super().__init__()
        self.address = address
        self.description = description
        self.area = area
        self.price = price
        self._status = status
        self.realtor = None

        # Bools
        self.is_rentable = False
        self.is_sellable = False
        self.is_buyable = False
        self.furnished = False
        self.parking = False
        self.balcony = False
        self.elevator = False
        self.air_conditioning = False
        self.is_utilities_included = False

    @property
    def status(self):
        return self._status if self._status is not None else "Unknown"

    @status.setter
    def status(self, value):
        if value in ["New", "Old", "Middle aged"]:
            self._status = value
        else:
            self._status = "Unknown"

    def __str__(self):
        return (f"Id: {self.id}, Address: {self.address},\n"
                f"Description: {self.description},\n"
                f"Area: {self.area}, Price: {self.price}\n"
                f"Status: {self.status}\n"
                f"{self.realtor}\n"
                f"Furnished: {self.furnished}, "
                f"Parking: {self.parking}, "
                f"Balcony: {self.balcony}, "
                f"Elevator: {self.elevator}, "
                f"Air conditioning: {self.air_conditioning}, "
                f"Utilities included: {self.is_utilities_included}\n")

    @abstractmethod
    def rent(self, customer, start_date, end_date):
        pass

    @abstractmethod
    def sell(self, customer):
        pass

    @abstractmethod
    def buy(self, customer):
        pass

    @abstractmethod
    def clone(self):
        pass

    def shallow_copy(self):
        return self.__class__(**self.__dict__)

    @staticmethod
    def print_all_info_about_estates(real_estates):
        for real_estate in real_estates:
            print(real_estate)
        print("\n")

    def reset(self):
        self.address = ""
        self.description = ""
        self.area = 0
        self.price = 0
        self.status = ""
        self.realtor = None
        self.is_rentable = False
        self.is_buyable = False
        self.is_sellable = False
        self.furnished = False
        self.parking = False
        self.balcony = False
        self.elevator = False
        self.air_conditioning = False
        self.is_utilities_included = False