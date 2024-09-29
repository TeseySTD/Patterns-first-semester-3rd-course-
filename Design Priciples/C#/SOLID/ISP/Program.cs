using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public interface IResidentialProperty
    {
        int GetNumberOfBedrooms();
    }

    public interface ICommercialProperty
    {
        decimal GetMonthlyRent();
    }

    public class House : IResidentialProperty
    {
        public int GetNumberOfBedrooms()
        {
            return 3; 
        }
    }

    public class Office : ICommercialProperty
    {
        public decimal GetMonthlyRent()
        {
            return 5000;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            IResidentialProperty house = new House();
            ICommercialProperty office = new Office();

            Console.WriteLine($"Number of bedrooms in house: {house.GetNumberOfBedrooms()}");
            Console.WriteLine($"Monthly rent for office: {office.GetMonthlyRent()}");
        }
    }
}
