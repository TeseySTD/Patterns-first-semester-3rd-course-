using System;
using System.Collections.Generic;
using System.Text;
using C_.Builders;
using C_.Entities;

namespace C_.Directors
{
    public class LuxuryEstateDirector : EstateDirector
    {
        public LuxuryEstateDirector(EstateBuilder estateBuilder):base(estateBuilder){}
        public override RealEstate BuildDefault()
        {
            var type = _estateBuilder.GetType().Name.Replace("Builder", "");
            _estateBuilder.Reset();
            _estateBuilder
                .SetAddress("")
                .SetDescription("Luxury " + type.ToLower())
                .SetPrice(100000)
                .SetStatus("New")
                .SetFurnished()
                .SetAirConditioning();
            
            switch(type.ToLower()){
                case "house": 
                    var h = (HouseBuilder)_estateBuilder;
                    return h
                        .SetPool()
                        .SetGym()
                        .SetGarden()
                        .SetHeatingType("local")
                        .GetEstate();
                case "apartment":
                    var a = (ApartmentBuilder)_estateBuilder;
                    return a
                            .SetRoomsNumber(5)
                            .SetHeatingType("central")
                            .SetElevator()
                            .SetParking()
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
