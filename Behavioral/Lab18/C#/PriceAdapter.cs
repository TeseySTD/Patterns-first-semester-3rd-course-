using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;
using C_.Interfaces;

namespace C_
{
    public class PriceAdapter : IBuyable
    {
        private RealEstate _estate;

        public PriceAdapter(RealEstate estate){
            _estate = estate;
        }

        public void SetEstateToBuy(Customer customer, double price){
            price = ConvertToUSD(customer.Location, price);
            _estate.SetEstateToBuy(customer, price);
        }

        public double ConvertToUSD(string location, double price) => location.ToLower() switch{
            "usa" => price,
            "ukraine" => price / 41.06,
            "france" => price / 841.21,
            "germany" => price / 0.9,
            _ => price
        };
    }
}
