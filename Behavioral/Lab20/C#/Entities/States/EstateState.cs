using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;
using C_.Interfaces;

namespace C_.Entities.States
{
    public abstract class EstateState : IBuyable, ISellable, IRentable
    {
        protected RealEstate _estate;
        public EstateState(RealEstate estate)
        {
            _estate = estate;
        }
        public abstract void Rent(Customer customer, DateTime startDate, DateTime endDate);

        public abstract void Sell(Customer customer);

        public abstract void SetEstateToBuy(Customer customer, double price);

    }
}
