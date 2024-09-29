using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public class Client
    {
        private string name;
        private List<RealEstate> _estates = new List<RealEstate>();

        public Client(string name)
        {
            this.name = name;
        }

        public void AddEstate(RealEstate property)
        {
            _estates.Add(property);
        }

        public void DisplayProperties()
        {
            foreach (var property in _estates)
            {
                Console.WriteLine($"{name}`s estate at: {property.Address}, price : {property.Price}");
            }
        }
    }

    public class RealEstate
    {
        public string Address { get; set; }
        public decimal Price { get; set; }

        public RealEstate(string address, decimal value)
        {
            Address = address;
            Price = value;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Client client = new Client("Ivan Ivanov");
            client.AddEstate(new RealEstate("123 Main St", 250000));
            client.DisplayProperties();
        }
    }
}
