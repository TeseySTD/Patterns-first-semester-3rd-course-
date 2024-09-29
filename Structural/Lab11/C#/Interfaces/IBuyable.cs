using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;
namespace C_.Interfaces
{
    public interface IBuyable
    {
        public void SetEstateToBuy(Customer customer, double price);
    }
}
