from person import *

class Customer(Person):
    def __init__(self, id, name_and_surname, phone, email):
        super().__init__(id, name_and_surname, phone, email)

    def __init__(self):
        super().__init__()