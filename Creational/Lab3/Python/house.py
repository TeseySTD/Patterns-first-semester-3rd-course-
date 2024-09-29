from real_estate import *

class House(RealEstate):
    def __init__(self, address, description, area, price, status):
        super().__init__(address, description, area, price, status)
        self.isRentable = True
        self.isSellable = False    

    def __str__(self):
        return f"House:\n{super().__str__()}"

    def clone(self):
        clone = copy.deepcopy(self)
        clone.realtor = Realtor(self.realtor.id, self.realtor.name_and_surname, self.realtor.phone, self.realtor.email)
        return clone

    def shallow_copy(self):
        return copy.copy(self)
        
    def rent(self, customer, start_date, end_date):
        if self.isRentable:
            print(f"House rented to {customer.name_and_surname} from {start_date} to {end_date}")

    def sell(self, customer):
        if self.isSellable:
            print(f"House sold to {customer.name_and_surname}")