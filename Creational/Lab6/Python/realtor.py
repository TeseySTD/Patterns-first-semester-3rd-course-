from person import *

class Realtor(Person):
    def __init__(self, name_and_surname, phone, email, years_of_work):
        super().__init__( name_and_surname, phone, email)
        self.years_of_work = years_of_work

    def __str__(self):
        return (f"Realtor:\nId: {self.id}, Name and surname: {self.name_and_surname},\n"
                f"Phone number: {self.phone}, Email: {self.email}, Years of work: {self.years_of_work}")