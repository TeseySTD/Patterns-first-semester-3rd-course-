namespace C_;

public class Customer : Person
{
    public Customer(string nameAndSurname, string phone, string email):base(nameAndSurname, phone, email) { }

    public Customer():base(){}
}
