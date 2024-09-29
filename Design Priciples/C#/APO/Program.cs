using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public abstract class RealEstate
    {
        public decimal Value { get; set; }
        public string Address { get; set; }
        public abstract void DisplayDetails();
    }

    public class House : RealEstate
    {
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }

        public House(string address, decimal value, int bedrooms, int bathrooms)
        {
            Address = address;
            Value = value;
            Bedrooms = bedrooms;
            Bathrooms = bathrooms;
        }

        public override void DisplayDetails()
        {
            Console.WriteLine($"House at {Address} with {Bedrooms} bedrooms and {Bathrooms} bathrooms, valued at {Value}");
        }
    }

    public class Apartment : RealEstate
    {
        public int Floor { get; set; }

        public Apartment(string address, decimal value, int floor)
        {
            Address = address;
            Value = value;
            Floor = floor;
        }

        public override void DisplayDetails()
        {
            Console.WriteLine($"Apartment at {Address} on floor {Floor}, valued at {Value}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {

            var list = new List<RealEstate>();

            for (int i = 0; i < 100; i++)
            {
                list.Add(new House($"House {i}", 250000, 3, 2));
                list.Add(new Apartment($"Apartment {i}", 150000, 5));
            }

            foreach (var estate in list)
            {
                estate.DisplayDetails();
            }
        }
    }
}
