using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_
{
    public class RealtorSubsystem : AbstractSubsystem
    {

        public override void MainAction(IEnumerable<AgencyObject> agencyObjects, bool notify = true)
        {
            var realtors = agencyObjects as IEnumerable<Realtor>;
            var sb = new StringBuilder();
            sb.AppendLine("Realtors portfolio:");
            foreach (var realtor in realtors)
            {
                sb.Append($"Realtor {realtor.NameAndSurname} has {realtor.RealEstates.Count} estates\n");
            }
            if (notify)
                Agency.GetInstance().Notify("Estates protfolio");
            Console.WriteLine(sb.ToString());
        }
        

    }
}
