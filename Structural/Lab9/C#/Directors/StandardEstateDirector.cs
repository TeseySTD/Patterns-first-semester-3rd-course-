using System;
using System.Collections.Generic;
using System.Text;
using C_.Builders;
using C_.Entities;

namespace C_.Directors
{
    public class StandardEstateDirector : EstateDirector
    {
        public StandardEstateDirector(EstateBuilder estateBuilder):base(estateBuilder){}
        public override RealEstate BuildDefault()
        {
            var type = _estateBuilder.GetType().Name.Replace("Builder", "");
            _estateBuilder.Reset();
            _estateBuilder
                .SetAddress("")
                .SetDescription("Standard " + type.ToLower())
                .SetPrice(10000)
                .SetStatus("Middle aged")
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
                            .SetRoomsNumber(2)
                            .SetHeatingType("central")
                            .SetElevator()
                            .GetEstate();
                case "room":
                    var r = (RoomBuilder)_estateBuilder;
                        return r
                            .SetNeighbors(true)
                            .SetHeatingType("central")
                            .GetEstate();
                default: 
                    throw new Exception("Wrong type of estate.");
            }
        }
    }
}
