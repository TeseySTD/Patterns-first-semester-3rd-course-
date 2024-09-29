class Realtor:
    def __init__(self, id, name_and_surname, phone, email):
        self.id = id
        self.name_and_surname = name_and_surname
        self.phone = phone
        self.email = email

    def __str__(self):
        return f"Realtor:\nId:{self.id}, Name and surname: {self.name_and_surname},\nPhone number: {self.phone}, Email: {self.email}"