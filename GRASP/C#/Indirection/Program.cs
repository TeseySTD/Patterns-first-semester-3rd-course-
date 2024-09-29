using System;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Client client = new Client();

            IMediator mediator = new RealEstateMediator(client);

            mediator.CreateHouse(120000);
            mediator.CreateApartment(80000);

            Console.WriteLine($"Total cost: {client.GetTotalValue()} usd.");
        }
    }

    public interface IMediator
    {
        void CreateHouse(decimal value);
        void CreateApartment(decimal value);
    }

    public class RealEstateMediator : IMediator
    {
        private readonly Realtor _realtor = new Realtor();
        private readonly Client _client;

        public RealEstateMediator(Client client)
        {
            _client = client;
        }

        public void CreateHouse(decimal value)
        {
            _client.AddEstate(_realtor.CreateHouse(value));
        }

        public void CreateApartment(decimal value)
        {
            _client.AddEstate(_realtor.CreateApartment(value));
        }
    }

    public class Client
    {
        private readonly List<RealEstate> _properties = new List<RealEstate>();

        public void AddEstate(RealEstate property)
        {
            _properties.Add(property);
        }

        public decimal GetTotalValue()
        {
            return _properties.Sum(p => p.Value);
        }
    }

    public class Realtor
    {
        public House CreateHouse(decimal value)
        {
            return new House(value);
        }

        public Apartment CreateApartment(decimal value)
        {
            return new Apartment(value);
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
