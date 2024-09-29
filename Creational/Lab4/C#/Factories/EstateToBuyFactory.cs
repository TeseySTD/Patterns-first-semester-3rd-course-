using System;
using System.Collections.Generic;
using System.Text;

namespace C_.Factories
{
    public class EstateToBuyFactory : EstateFactory
    {
        public override RealEstate CreateEstate(string type)
        {
            var e = EstateFromType(type);
            e.IsBuyable = true;
            e.IsRentable = false;
            e.IsSellable = false;
            return e;
        }
    }
}
