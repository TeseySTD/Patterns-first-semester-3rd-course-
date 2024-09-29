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
        public bool IsGoodNeighbors { get; set; } = false;
        public Room():base("Dungeon", "tra ta ta", 50, 1000, "New"){
        }
        public Room(string address, string description, double area, double price, string status) :
            base(address, description, area, price, status)
        {   
        }

        public override string ToString(){
            return "Room:\n"+ base.ToString();
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
