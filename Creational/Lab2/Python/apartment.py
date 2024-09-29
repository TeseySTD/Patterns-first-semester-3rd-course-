from real_estate import *

class Apartment(RealEstate):
    def __init__(self, address, description, area, price, status, rooms_number):
        super().__init__(address, description, area, price, status)
        self.rooms_number = rooms_number

    def __str__(self):
        return f"Apartment:\n{super().__str__()}, Rooms number: {self.rooms_number}"
    
    def clone(self):
        clone = copy.deepcopy(self)
        clone.realtor = Realtor(self.realtor.id, self.realtor.name_and_surname, self.realtor.phone, self.realtor.email)
        return clone

    def shallow_copy(self):
        return copy.copy(self)