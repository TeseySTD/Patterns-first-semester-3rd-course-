using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public class EstateHelper
    {
        public decimal CalculateTotalValue(List<RealEstate> properties)
        {
            return properties.Sum(p => p.Value);
        }
    }

    public class Client
    {
        private List<RealEstate> properties = new List<RealEstate>();
        private EstateHelper helper = new EstateHelper();

        public void AddEstate(RealEstate property)
        {
            properties.Add(property);
        }

        public decimal GetTotalValue()
        {
            return helper.CalculateTotalValue(properties);
        }
    }

    public class RealEstate
    {
        public string Address { get; set; }
        public decimal Value { get; set; }

        public RealEstate(string address, decimal value)
        {
            Address = address;
            Value = value;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Client client = new Client();
            client.AddEstate(new RealEstate("123 Main St", 250000));
            client.AddEstate(new RealEstate("456 Oak St", 300000));
            
            Console.WriteLine($"Total value of properties: {client.GetTotalValue()}");
        }
    }
}
