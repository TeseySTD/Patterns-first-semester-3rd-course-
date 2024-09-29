using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Text;
using C_.Entities;
namespace C_.Builders
{
    public class ApartmentBuilder : EstateBuilder
    {
        public override void Reset(){
            _estate = new Apartment();
        }

        public EstateBuilder SetRoomsNumber(int number){
            var a = (Apartment)_estate;
            a.RoomsNumber = number;
            return this;
        }

        public EstateBuilder SetHeatingType(string type){
            var a = (Apartment)_estate;
            a.HeatingType = type;
            return this;
        }
    }
}
