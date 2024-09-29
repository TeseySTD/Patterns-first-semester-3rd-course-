from person import *

class Customer(Person):
    def __init__(self, name_and_surname, phone, email):
        super().__init__( name_and_surname, phone, email)
