namespace C_;

public class Customer : Person
{
    public Customer(int id, string nameAndSurname, string phone, string email):base(id, nameAndSurname, phone, email) { }

    public Customer():base(){}
}
