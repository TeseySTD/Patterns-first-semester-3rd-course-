using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class House : RealEstate
    {

        public bool Garden { get; set; }
        public bool Pool { get; set; }
        public bool Gym { get; set; }
        public string HeatingType { get; set; }
        public House():base("Dungeon", "tra ta ta", 50, 1000, "New"){
            IsRentable = true;
            IsSellable = false;
        }
        public House(string address, string description, double area, double price, string status): 
            base(address, description, area, price, status) 
        {   
            IsRentable = true;
            IsSellable = false;
        }

        public override string ToString()
        {
            return "House:\n" + base.ToString();
        }

        public override void Rent(Customer customer, DateTime startDate, DateTime endDate){
            if(IsRentable)
                Console.WriteLine($"Customer {customer.NameAndSurname} rented house on address {Address} from {startDate} to {endDate}.");
        }

        public override void Sell(Customer customer){
            if(IsSellable)
                Console.WriteLine($"Customer {customer.NameAndSurname} bought house on address {Address}.");
        }
        public override void Buy(Customer customer){
            if(IsBuyable)
                Console.WriteLine($"Customer {customer.NameAndSurname} sold house on address {Address}.");
        }
        public override House Clone()
        {
            var clone = (House)MemberwiseClone();
            clone.Realtor = Realtor == null ? Realtor : new Realtor(Realtor);
            return clone;
        }

        public override House ShallowCopy()
        {
            return (House)MemberwiseClone();
        }

        public override void Reset()
        {
            base.Reset();
            HeatingType = "";
            Gym = false;
            Garden = false;
            Pool = false;
        }
    }
}
