from real_estate import *

class Apartment(RealEstate):
    def __init__(self, address="Dungeon", description="tra ta ta", area=50, price=1000, status="New", rooms_number=3):
        super().__init__(address,description,area,price,status)
        self.rooms_number = rooms_number
        self.realtor = None
        self.heating_type = None

    def __str__(self):
        return f"Apartment:\n{super().__str__()}, Rooms number: {self.rooms_number}"

    def rent(self, customer, start_date, end_date):
        if self.is_rentable:
            print(f"Customer {customer.name_and_surname} rented apartment on address {self.address} from {start_date} to {end_date}.")

    def sell(self, customer):
        if self.is_sellable:
            print(f"Customer {customer.name_and_surname} bought apartment on address {self.address}.")

    def buy(self, customer):
        if self.is_buyable:
            print(f"Customer {customer.name_and_surname} sold apartment on address {self.address}.")
    
    def clone(self):
        clone = copy.deepcopy(self)
        clone.realtor = None if clone.realtor is None else Realtor( self.realtor.name_and_surname, self.realtor.phone, self.realtor.email)
        return clone

    def shallow_copy(self):
        return copy.copy(self)
    
    def reset(self):
        super().reset()
        self.rooms_number = 0
        self.heating_type = None