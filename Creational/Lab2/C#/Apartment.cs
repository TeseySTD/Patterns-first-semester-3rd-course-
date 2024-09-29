using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class Apartment : RealEstate
    {
        public int RoomsNumber{ get; set;}
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
            clone.Realtor = new Realtor(Realtor);
            return clone;
        }

        public override Apartment ShallowCopy()
        {
            return (Apartment)MemberwiseClone();
        }
    }
}
