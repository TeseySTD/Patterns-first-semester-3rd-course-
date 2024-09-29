using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.Builders
{
    public class HouseBuilder : EstateBuilder
    {        
        public override void Reset(){
            _estate = new House();
        }
        
        public HouseBuilder SetGarden(){
            var h = (House)_estate;
            h.Garden = true;
            return this;
        }

        public HouseBuilder SetPool(){
            var h = (House)_estate;
            h.Pool = true;
            return this;
        }
        public HouseBuilder SetGym(){
            var h = (House)_estate;
            h.Gym = true;
            return this;
        }
        public HouseBuilder SetHeatingType(string heating){
            var h = (House)_estate;
            h.HeatingType = heating;
            return this;
        }

    }
}
