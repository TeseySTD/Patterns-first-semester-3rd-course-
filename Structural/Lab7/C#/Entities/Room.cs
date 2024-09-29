using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace C_.Entities
{
    public class Room : RealEstate
    {
        public string HeatingType { get; set; }
        public Room():base("Dungeon", "tra ta ta", 50, 1000, "New"){
        }
        public Room(string address, string description, double area, double price, string status) :
            base(address, description, area, price, status)
        {   
        }

        public override string ToString(){
            return "Room:\n"+ base.ToString();
        }

        public override void Rent(Customer customer, DateTime startDate, DateTime endDate){
            if(IsRentable)
                Console.WriteLine($"Customer {customer.NameAndSurname} rented room on address {Address} from {startDate} to {endDate}.");
        }

        public override void Sell(Customer customer){
            if(IsSellable)
                Console.WriteLine($"Customer {customer.NameAndSurname} bought room on address {Address}.");
        }
        
        public override void SetEstateToBuy(Customer customer, double price){
            if(IsBuyable){
                Console.WriteLine($"Customer {customer.NameAndSurname} put up for sale room on address {Address} with pice(USD) {price}.");
                PriceInUSD = price;
                IsBuyable = false;
            }
        }
        public override Room Clone()
        {
            var clone = (Room)MemberwiseClone();
            clone.Realtor = Realtor == null ? Realtor : new Realtor(Realtor);
            return clone;
        }

        public override Room ShallowCopy()
        {
            return (Room)MemberwiseClone();
        }

        public override void Reset()
        {
            base.Reset();
            HeatingType = "";
        }
    }
}
