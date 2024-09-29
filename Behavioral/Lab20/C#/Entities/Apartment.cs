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
