using System;
using System.Collections.Generic;
using System.Text;

namespace C_.Factories
{
    public abstract class EstateFactory
    {
        public abstract RealEstate CreateEstate(string type);
        protected RealEstate EstateFromType(string type) => type.ToLower() switch
        {
            "apartment" => new Apartment(),
            "house" => new House(),
            "room" => new Room(),
            _ => throw new ArgumentException($"{type}: Wrong type of estate"),
        };
    }
}
