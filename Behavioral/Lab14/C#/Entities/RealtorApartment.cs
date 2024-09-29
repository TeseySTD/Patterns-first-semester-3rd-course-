using System;
using System.Collections.Generic;
using System.Text;

namespace C_.Entities
{
    public class RealtorApartment : RealtorAbstract
    {
        public RealtorApartment(string nameAndSurname, string phone, string email, double yearsOfWork) : base(nameAndSurname, phone, email, yearsOfWork)
        {
        }

        public override void SellEstate(Customer customer, RealEstate estate)
        {
            if(estate is Apartment)
                Console.WriteLine($"{NameAndSurname} is selling {estate.GetType().Name} to {customer.NameAndSurname} with price {estate.PriceInUSD}$");
            else if(_realtor != null)
                _realtor.SellEstate(customer, estate);
        }

    }
}
