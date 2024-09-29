using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;
using C_.Entities;
namespace C_.Builders
{
    public abstract class EstateBuilder
    {
        protected RealEstate _estate;
        public abstract void Reset();
        public RealEstate GetEstate(){
            var clone = (RealEstate)_estate.Clone();
            Reset();
            return clone;
        }

        public EstateBuilder(){
            Reset();
        }

        public virtual EstateBuilder MakeSellable(){
            _estate.IsSellable = true;
            return this;
        }
        public virtual EstateBuilder MakeBuyable(){
            _estate.IsBuyable = true;
            return this;
        }
        public virtual EstateBuilder MakeRentable(){
            _estate.IsRentable = true;
            return this;
        }
        public virtual EstateBuilder AddRealtor(RealtorAbstract realtor){
            _estate.Realtor = realtor;
            return this;
        }
        public virtual EstateBuilder SetStatus(string status){
            _estate.Status = status;
            return this;
        }
        public virtual EstateBuilder SetPrice(double price){
            _estate.PriceInUSD = price;
            return this;
        }
        public virtual EstateBuilder SetArea(double area){
            _estate.Area = area;
            return this;
        }
        public virtual EstateBuilder SetDescription(string description){
            _estate.Description = description;
            return this;
        }
        public virtual EstateBuilder SetAddress(string address){
            _estate.Address = address;
            return this;
        }
        ///Bools:
        public virtual EstateBuilder SetFurnished(){
            _estate.Furnished = true;
            return this;
        }
        public virtual EstateBuilder SetParking(){
            _estate.Parking = true;
            return this;
        }
        public virtual EstateBuilder SetBalcony(){
            _estate.Balcony = true;
            return this;
        }
        public virtual EstateBuilder SetElevator(){
            _estate.Elevator = true;
            return this;
        }
        public virtual EstateBuilder SetAirConditioning(){
            _estate.AirConditioning = true;
            return this;
        }
        public virtual EstateBuilder SetUtilitiesIncluded(){
            _estate.IsUtilitiesIncluded = true;
            return this;
        }
    }
}
