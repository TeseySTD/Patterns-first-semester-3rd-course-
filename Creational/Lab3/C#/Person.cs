namespace C_;

public abstract class Person
{
    public int Id { get; set; }
    public string NameAndSurname { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }

    public Person(int id, string nameAndSurname, string phone, string email) { 
        Id = id;
        NameAndSurname = nameAndSurname;
        Phone = phone;
        Email = email;
    }

    public Person(){
        Id = 0;
        NameAndSurname = "Jane Doe";
        Phone = "8 800 555 35 35";
        Email = "example@gmail.com";
    }
}
