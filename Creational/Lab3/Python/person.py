from abc import *

class Person(ABC):
    def __init__(self, id=0, name_and_surname="Jane Doe", phone="8 800 555 35 35", email="example@gmail.com"):
        self.id = id
        self.name_and_surname = name_and_surname
        self.phone = phone
        self.email = email