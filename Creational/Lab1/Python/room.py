from real_estate import RealEstate

class Room(RealEstate):
    def __str__(self):
        return f"Room:\n{super().__str__()}"