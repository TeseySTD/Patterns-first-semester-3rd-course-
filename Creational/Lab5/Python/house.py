from real_estate import *

class House(RealEstate):
    def __init__(self, address="Dungeon", description="tra ta ta", area=50, price=1000, status="New"):
        super().__init__(address, description, area, price, status)
        self.garden = False
        self.pool = False
        self.gym = False
        self.heating_type = None

    def __str__(self):
        return f"House:\n{super().__str__()}"

    def rent(self, customer, start_date, end_date):
        if self.is_rentable:
            print(f"Customer {customer.name_and_surname} rented house on address {self.address} from {start_date} to {end_date}.")

    def sell(self, customer):
        if self.is_sellable:
            print(f"Customer {customer.name_and_surname} bought house on address {self.address}.")

    def buy(self, customer):
        if self.is_buyable:
            print(f"Customer {customer.name_and_surname} sold house on address {self.address}.")


    def clone(self):
        clone = copy.deepcopy(self)
        clone.realtor = None if clone.realtor is None else Realtor( self.realtor.name_and_surname, self.realtor.phone, self.realtor.email)
        return clone

    def shallow_copy(self):
        return copy.copy(self)
        
    def rent(self, customer, start_date, end_date):
        if self.isRentable:
            print(f"House rented to {customer.name_and_surname} from {start_date} to {end_date}")

    def sell(self, customer):
        if self.isSellable:
            print(f"House sold to {customer.name_and_surname}")