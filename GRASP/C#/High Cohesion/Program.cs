using System;
using System.Collections.Generic;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Client client = new Client();
            client.AddEstate(new House(150000));
            client.AddEstate(new Apartment(70000));

            Console.WriteLine($"Total cost of all estates: {client.GetTotalValue()} грн.");
        }
    }

    public class Client
    {
        private readonly List<RealEstate> _estates = new List<RealEstate>();

        public void AddEstate(RealEstate estate)
        {
            _estates.Add(estate);
        }

        public decimal GetTotalValue()
        {
            return _estates.Sum(p => p.Value);
        }
    }

    public abstract class RealEstate
    {
        public decimal Value { get; protected set; }
    }

    public class House : RealEstate
    {
        public House(decimal value)
        {
            Value = value;
        }
    }

    public class Apartment : RealEstate
    {
        public Apartment(decimal value)
        {
            Value = value;
        }
    }
}
