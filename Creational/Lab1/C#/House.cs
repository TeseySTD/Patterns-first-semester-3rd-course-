using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class House : RealEstate
    {
        public House(string address, string description, double area, double price, string status): 
            base(address, description, area, price, status) 
        { }

        public override string ToString()
        {
            return "House:\n" + base.ToString();
        }
    }
}
