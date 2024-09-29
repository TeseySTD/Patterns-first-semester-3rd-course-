import random
import threading
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

    def print_random_estate_and_clones(self):
        r = random.Random()
        i = r.randint(0, 2)
        estate = []

        if i == 0:
            estate = self.apartments
        elif i == 1:
            estate = self.rooms
        elif i == 2:
            estate = self.houses

        if len(estate) > 0:
            j = r.randint(0, len(estate) - 1)
            el = estate[j]
            el_clone = el.clone()
            el_copy = el.shallow_copy()

            print(f"Original: {el}\n")
            print(f"Clone: {el_clone}\n")
            print(f"Shallow copy: {el_copy}\n")

            print("Change shallow copy realtor name to 'Jane Doe'...\n")
            el_copy.realtor.name_and_surname = "Jane Doe"
            print(f"Original after changing shallow copy: {el}\n")
            print(f"Clone: {el_clone}")