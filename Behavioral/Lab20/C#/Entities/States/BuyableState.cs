using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.States
{
    public class BuyableState : EstateState
    {
        public BuyableState(RealEstate estate) : base(estate)
        {
            
        }
        public override void Rent(Customer customer, DateTime startDate, DateTime endDate)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't rent an estate");
        }
        public override void Sell(Customer customer)
        {
            Console.WriteLine($"Customer {customer.NameAndSurname} can't sell an estate");
            
        }
        public override void SetEstateToBuy(Customer customer, double price)
        {
            if(!_estate.IsAlreadyBought){
            Console.WriteLine($"Customer {customer.NameAndSurname} bought an estate with price (USD) {price}");
            _estate.IsAlreadyBought = true;    
            }
            else
                Console.WriteLine($"Customer {customer.NameAndSurname} can't buy an estate because it is already bought");
        }

    }
}
