using System;
using System.Collections.Generic;
using System.Text;

namespace C_.Factories
{
    public class EstateToSellFactory : EstateFactory
    {
        public override RealEstate CreateEstate(string type)
        {
            var e = EstateFromType(type);
            e.IsBuyable = false;
            e.IsRentable = false;
            e.IsSellable = true;
            return e;
        }
    }
}
