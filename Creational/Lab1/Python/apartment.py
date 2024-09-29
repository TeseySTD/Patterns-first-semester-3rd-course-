from real_estate import RealEstate

class Apartment(RealEstate):
    def __init__(self, address, description, area, price, status, rooms_number):
        super().__init__(address, description, area, price, status)
        self.rooms_number = rooms_number

    def __str__(self):
        return f"Apartment:\n{super().__str__()}, Rooms number: {self.rooms_number}"