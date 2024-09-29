using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_
{
    public class EstateSubsystem
    {
        public string EstatePortfolio(IEnumerable<RealEstate> realEstates)
        {
            var sb = new StringBuilder();
            foreach (var estate in realEstates)
            {
                sb.Append($"Estate {estate.Address}\n");
            }

            return sb.ToString();
        }
    }
}
