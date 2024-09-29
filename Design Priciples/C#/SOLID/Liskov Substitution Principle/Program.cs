using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public abstract class RealEstate
    {
        public virtual decimal GetValue() => 0;
    }

    public class House : RealEstate
    {
        public override decimal GetValue() => 250000; 
    }

    public class Apartment : RealEstate
    {
        public override decimal GetValue() => 150000; 
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            RealEstate realEstate = new House();
            Console.WriteLine($"Value of the property: {realEstate.GetValue()}"); // House

            realEstate = new Apartment();
            Console.WriteLine($"Value of the property: {realEstate.GetValue()}"); // Apartment
        }
    }
}
