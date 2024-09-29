from abc import *

class RealEstateCreator(ABC):
    @abstractmethod
    def create_estate(self):
        pass

    def rent_estate(self, customer, start_date, end_date):
        estate = self.create_estate()
        estate.rent(customer, start_date, end_date)

    def sell_estate(self, customer):
        estate = self.create_estate()
        estate.sell(customer)