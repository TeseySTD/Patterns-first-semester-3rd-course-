from real_estate import *

class Room(RealEstate):
    def __str__(self):
        return f"Room:\n{super().__str__()}"
    def clone(self):
        clone = copy.deepcopy(self)
        clone.realtor = Realtor(self.realtor.id, self.realtor.name_and_surname, self.realtor.phone, self.realtor.email)
        return clone

    def shallow_copy(self):
        return copy.copy(self)