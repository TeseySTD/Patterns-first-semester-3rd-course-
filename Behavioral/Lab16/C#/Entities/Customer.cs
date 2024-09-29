using C_.Interfaces;

namespace C_.Entities
{
    public class Customer : Person
    {
        public Customer(string nameAndSurname, string phone, string email):base(nameAndSurname, phone, email) { }

        public Customer():base(){}

        public void SetToBuy(IBuyable buyable, double price) {
            buyable.SetEstateToBuy(this, price);
        }
    }

}

