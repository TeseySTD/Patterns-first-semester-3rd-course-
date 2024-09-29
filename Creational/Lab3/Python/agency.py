import random
import threading
from real_estate_creator import *
from customer import *
from datetime import datetime
from apartment_creator import *
from house_creator import *
from room_creator import *
class Agency:
    _instance = None
    _lock_instance = threading.Lock()
    _lock_apartment = threading.Lock()
    _lock_room = threading.Lock()
    _lock_house = threading.Lock()
    _lock_realtor = threading.Lock()

    def __init__(self):
        self.apartments = []
        self.rooms = []
        self.houses = []
        self.realtors = []

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            with cls._lock_instance:
                if cls._instance is None:
                    cls._instance = cls()
        return cls._instance

    def add_apartment(self, apartment):
        with self._lock_apartment:
            self.apartments.append(apartment)

    def add_room(self, room):
        with self._lock_room:
            self.rooms.append(room)

    def add_house(self, house):
        with self._lock_house:
            self.houses.append(house)

    def add_realtor(self, realtor):
        with self._lock_realtor:
            self.realtors.append(realtor)

    def rent_or_sale_random_estates(self):
        r = random.Random()
        i = r.randint(0, 2)

        if i == 0:
            self.rent_or_sale_estate(ApartmentCreator())
        elif i == 1:
            self.rent_or_sale_estate(RoomCreator())
        elif i == 2:
            self.rent_or_sale_estate(HouseCreator())


    def rent_or_sale_estate(self,creator):
        creator.rent_estate(Customer(), datetime(2023, 1, 1), datetime(2023, 12, 31))
        creator.sell_estate(Customer())
