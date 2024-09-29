using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.Builders
{
    public class RoomBuilder : EstateBuilder
    {
        public override void Reset(){
            _estate = new Room();
        }
        public RoomBuilder SetNeighbors(bool goodOrBad = false){
            var h = (Room)_estate;
            h.IsGoodNeighbors = goodOrBad;
            return this;
        }
        public RoomBuilder SetHeatingType(string heating){
            var h = (Room)_estate;
            h.HeatingType = heating;
            return this;
        }
    }
}
