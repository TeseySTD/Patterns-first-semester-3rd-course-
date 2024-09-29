using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_.Entities
{
    public class Apartment : RealEstate
    {
        public int RoomsNumber{ get; set;}
        public string HeatingType { get; set; }
        public Apartment():base("Dungeon", "tra ta ta", 50, 1000, "New"){
            RoomsNumber = 3;
        }
        public Apartment(string address, string description, double area, double price, string status, int roomsNumber) :
            base(address, description, area, price, status)
        {
            RoomsNumber = roomsNumber;
        }
        public override string ToString()
        {
            return "Apartment:\n" + base.ToString() + $", Rooms number: {RoomsNumber}";
        }

        public override void Rent(Customer customer, DateTime startDate, DateTime endDate){
            if(IsRentable)
                Console.WriteLine($"Customer {customer.NameAndSurname} rented apartment on address {Address} from {startDate} to {endDate}.");
        }

        public override void Sell(Customer customer){
            if(IsSellable)
                Console.WriteLine($"Customer {customer.NameAndSurname} bought apartment on address {Address}.");
        }

        public override void SetEstateToBuy(Customer customer, double price){
            if(IsBuyable){
                Console.WriteLine($"Customer {customer.NameAndSurname} put up for sale apartment on address {Address} with price(USD) {price}.");
                PriceInUSD = price;
                IsBuyable = false;
            }
        }

        public override Apartment Clone()
        {
            var clone = (Apartment)MemberwiseClone();
            clone.Realtor = Realtor == null ? Realtor : new Realtor(Realtor);
            return clone;
        }

        public override Apartment ShallowCopy()
        {
            return (Apartment)MemberwiseClone();
        }

        public override void Reset()
        {
            base.Reset();
            RoomsNumber = 0;
            HeatingType = "";
        }
    }
}
