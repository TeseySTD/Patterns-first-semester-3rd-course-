using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public class RealEstate
    {
        public string Address { get; set; }
        public decimal Value { get; set; }
    }

    public class RealEstateReport
    {
        public void PrintReport(RealEstate property)
        {
            Console.WriteLine($"Property at: {property.Address}, valued at: {property.Value}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            RealEstate property = new RealEstate { Address = "123 Main St", Value = 200000 };
            RealEstateReport report = new RealEstateReport();
            report.PrintReport(property);
        }
    }
}
