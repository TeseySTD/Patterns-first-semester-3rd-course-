using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.States
{
    public class RentableState : EstateState
    {
        public RentableState(RealEstate estate) : base(estate){}
        public override void Rent(Customer customer, DateTime startDate, DateTime endDate)
        {
            if(!_estate.IsAlreadyRented){
                Console.WriteLine($"Customer {customer.NameAndSurname} rented an estate from {startDate} to {endDate}");
                _estate.IsAlreadyRented = true;    
            }
            else
                Console.WriteLine($"Customer {customer.NameAndSurname} can't rent an estate because it is already rented");
        }

        public override void Sell(Customer customer)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't sell an estate");
            
        }

        public override void SetEstateToBuy(Customer customer, double price)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't buy an estate");
        }

    }
}
