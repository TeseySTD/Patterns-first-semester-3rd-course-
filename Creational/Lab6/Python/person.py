from agency_object import *

class Person(AgencyObject):
    def __init__(self, name_and_surname="Jane Doe", phone="8 800 555 35 35", email="example@gmail.com"):
        self.name_and_surname = name_and_surname
        self.phone = phone
        self.email = email