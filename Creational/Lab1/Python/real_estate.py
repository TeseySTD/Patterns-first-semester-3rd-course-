class RealEstate:
    def __init__(self, address, description, area, price, status):
        self.id = None
        self.address = address
        self.description = description
        self.area = area
        self.price = price
        self._status = "Unknown"
        self.status = status

    @property
    def status(self):
        return self._status if self._status else "Unknown"

    @status.setter
    def status(self, value):
        if value in ["New", "Old", "Middle aged"]:
            self._status = value
        else:
            self._status = "Unknown"

    def __str__(self):
        return f"Id: {self.id}, Address: {self.address},\n Description: {self.description},\nArea: {self.area}, Price: {self.price}\nStatus: {self.status}"
    
    @staticmethod
    def print_all_info_about_estates(real_estates):
        for real_estate in real_estates:
            print(str(real_estate))
