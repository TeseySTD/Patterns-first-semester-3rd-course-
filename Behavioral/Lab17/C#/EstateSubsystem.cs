using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_
{
    public class EstateSubsystem : AbstractSubsystem
    {
        public override void MainAction(IEnumerable<AgencyObject> agencyObjects, bool notify = true)
        {
            var realEstates = agencyObjects as IEnumerable<RealEstate>;

            var sb = new StringBuilder();
            sb.Append($"Real Estates protfolio:\n");
            foreach (var estate in realEstates)
            {
                sb.Append($"Estate {estate.Address}\n");
            }
            if (notify)
                Agency.GetInstance().Notify("Realtors protfolio");
            Console.WriteLine(sb.ToString());
        }

    }
}
