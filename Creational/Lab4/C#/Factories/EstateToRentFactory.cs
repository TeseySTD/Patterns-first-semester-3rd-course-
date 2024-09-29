using System;
using System.Collections.Generic;
using System.Text;

namespace C_.Factories
{
    public class EstateToRentFactory : EstateFactory
    {
        public override RealEstate CreateEstate(string type)
        {
            var e = EstateFromType(type);
            e.IsBuyable = false;
            e.IsRentable = true;
            e.IsSellable = false;
            return e;
        }
    }
}
