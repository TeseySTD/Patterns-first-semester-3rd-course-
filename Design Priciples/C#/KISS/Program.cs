using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public class SimpleHouse
    {
        public decimal Value { get; set; }
        public string Address { get; set; }

        public SimpleHouse(string address, decimal value)
        {
            Address = address;
            Value = value;
        }

        public void DisplayDetails()
        {
            Console.WriteLine($"House at {Address} valued at {Value}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            SimpleHouse house = new SimpleHouse("123 Main St", 200000);
            house.DisplayDetails();
        }
    }
}
