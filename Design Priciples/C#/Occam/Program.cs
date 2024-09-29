using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public class House
    {
        public string Address { get; set; }
        public decimal Value { get; set; }

        public House(string address, decimal value)
        {
            Address = address;
            Value = value;
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"House at {Address} valued at {Value}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            House house = new House("123 Main St", 300000);
            house.DisplayInfo();
        }
    }
}
