from real_estate import RealEstate

class House(RealEstate):
    def __str__(self):
        return f"House:\n{super().__str__()}"