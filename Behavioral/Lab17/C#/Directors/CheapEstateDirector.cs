using System;
using System.Collections.Generic;
using System.Text;
using C_.Builders;
using C_.Entities;

namespace C_.Directors
{
    public class CheapEstateDirector : EstateDirector
    {
        public CheapEstateDirector(EstateBuilder estateBuilder):base(estateBuilder){}
        public override RealEstate BuildDefault()
        {
            var type = _estateBuilder.GetType().Name.Replace("Builder", "");
            _estateBuilder.Reset();
            _estateBuilder
                .SetAddress("")
                .SetDescription("Standard " + type.ToLower())
                .SetPrice(1000)
                .SetStatus("Old")
                .SetFurnished()
                .SetAirConditioning();
            
            switch(type.ToLower()){
                case "house": 
                    var h = (HouseBuilder)_estateBuilder;
                    return h
                        .SetHeatingType("local")
                        .GetEstate();
                case "apartment":
                    var a = (ApartmentBuilder)_estateBuilder;
                    return a
                            .SetRoomsNumber(1)
                            .SetHeatingType("central")
                            .GetEstate();
                case "room":
                    var r = (RoomBuilder)_estateBuilder;
                        return r
                            .SetNeighbors(false)
                            .SetHeatingType("central")
                            .GetEstate();
                default: 
                    throw new Exception("Wrong type of estate.");
            }
        }
    }
}
