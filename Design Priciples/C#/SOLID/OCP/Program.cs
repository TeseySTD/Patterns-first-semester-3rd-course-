using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public abstract class RealEstate
    {
        public abstract decimal GetPrice();
    }

    public class House : RealEstate
    {
        public override decimal GetPrice()
        {
            return 300000;
        }
    }

    public class Apartment : RealEstate
    {
        public override decimal GetPrice()
        {
            return 150000;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            RealEstate house = new House();
            RealEstate apartment = new Apartment();

            Console.WriteLine($"Price of the house: {house.GetPrice()}");
            Console.WriteLine($"Price of the apartment: {apartment.GetPrice()}");
        }
    }
}
