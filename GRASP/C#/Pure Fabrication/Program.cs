using System;
using System.Collections.Generic;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Client client = new Client();
            RealEstateRepository repository = new RealEstateRepository();

            client.AddProperty(new House(150000));
            client.AddProperty(new Apartment(85000));

            repository.SaveClientEstates(client);

            Console.WriteLine("Estates of client stored in database");
        }
    }

    public class Client
    {
        private readonly List<RealEstate> _properties = new List<RealEstate>();

        public void AddProperty(RealEstate property)
        {
            _properties.Add(property);
        }

        public List<RealEstate> GetProperties()
        {
            return _properties;
        }
    }

    public class RealEstateRepository
    {
        public void SaveClientEstates(Client client)
        {
            foreach (var property in client.GetProperties())
            {
                Console.WriteLine($"Stored: {property.GetType().Name} price {property.Value} usd.");
            }
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
