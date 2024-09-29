using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.States
{
    public class SellableState : EstateState
    {
        public SellableState(RealEstate estate) : base(estate)
        {
            
        }
        public override void Rent(Customer customer, DateTime startDate, DateTime endDate)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't rent an estate");
        }

        public override void Sell(Customer customer)
        {
            if(!_estate.IsAlreadySold){
                _estate.IsAlreadySold = true;
                Console.WriteLine($"Customer {customer.NameAndSurname} sold an estate");
            }
            else
                Console.WriteLine($"Customer {customer.NameAndSurname} can't sell an estate because it is already sold");
        }

        public override void SetEstateToBuy(Customer customer, double price)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't buy an estate");
        }

    }
}
