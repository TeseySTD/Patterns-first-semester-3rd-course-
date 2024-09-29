using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using C_.Interfaces;

namespace C_.Entities
{
    public abstract class RealEstate : AgencyObject, ICloneable, IRentable, IBuyable, ISellable
    {
        public string Address { get; set; }
        public string Description { get; set; }
        public double Area { get; set; }
        public double PriceInUSD { get; set; }
        public string Status 
        { 
            get => _status != null ? _status : "Unknown";
            set
            {
                if (value == "New" || value == "Old" || value == "Middle aged")
                    _status = value;
                else
                    _status = "Unknown";
            } 
        }
        public RealtorAbstract Realtor{ get; set; }
        
        //Bools
        public bool IsRentable { get; set; } = false;
        public bool IsSellable { get; set; } = false;
        public bool IsBuyable { get; set; } = true;
        public bool Furnished { get; set; } = false;
        public bool Parking { get; set; } = false;
        public bool Balcony { get; set; } = false;
        public bool Elevator { get; set; } = false;
        public bool AirConditioning { get; set; } = false;
        public bool IsUtilitiesIncluded { get; set; } = false;
        
        private string _status;

        public RealEstate(string address, string description, double area, double price, string status):base() { 
            Address = address;
            Description = description;
            Area = area;
            PriceInUSD = price;
            Status = status;
            // Realtor = new Realtor("John Doe", "8 800 555 35 35", "example@gmail.com", 2);
        }

        public override string ToString(){
            return $"Id: {Id}, Address: {Address},\n Description: {Description},\nArea: {Area}, Price: {PriceInUSD}\nStatus: {Status}\n{Realtor}\nFurnished: {Furnished}, "+
            $"Parking: {Parking}, Balcony: {Balcony}, Elevator: {Elevator}, Air conditioning: {AirConditioning}, Utilities included: {IsUtilitiesIncluded}\n";
        }

        public abstract void Rent(Customer customer, DateTime startDate, DateTime endDate);
        public abstract void Sell(Customer customer);
        public abstract void SetEstateToBuy(Customer customer, double price);
        public abstract object Clone();
        public abstract RealEstate ShallowCopy();

        public static void PrintAllInfoAboutEstates(IEnumerable<RealEstate>  realEstates){
            foreach (RealEstate realEstate in realEstates){
                Console.WriteLine(realEstate.ToString());
            }
            Console.WriteLine("\n");
        }

        public virtual void Reset(){
            Address = "";
            Description = "";
            Area = 0;
            PriceInUSD = 0;
            Status = "";
            Realtor = null;
            IsRentable = false;
            IsBuyable = false;
            IsSellable = false;
            Furnished = false;
            Parking = false;
            Balcony = false;
            Elevator = false;
            AirConditioning = false;
            IsUtilitiesIncluded = false;
        }

    }
}
