using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_
{
    public class RealtorSubsystem
    {
        public string RealtorsPortfolio(List<Realtor> realtors)
        {
            var sb = new StringBuilder();
            foreach (var realtor in realtors)
            {
                sb.Append($"Realtor {realtor.NameAndSurname} has {realtor.RealEstates.Count} estates\n");
            }

            return sb.ToString();
        }
    }
}
