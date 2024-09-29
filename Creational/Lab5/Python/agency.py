import random
import threading
from customer import *
from datetime import datetime
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

