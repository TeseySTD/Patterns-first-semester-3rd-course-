using System;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Realtor realtor = new Realtor();
            Client client = new Client();
            RealEstateController controller = new RealEstateController(realtor, client);

            controller.AddNewHouseToClient(130000);
            controller.AddNewApartmentToClient(70000);

            Console.WriteLine($"Total cost of all estates: {controller.GetClientPropertyTotalValue()} грн.");
        }
    }

    public class RealEstateController
    {
        private readonly Realtor _realtor;
        private readonly Client _client;

        public RealEstateController(Realtor realtor, Client client)
        {
            _realtor = realtor;
            _client = client;
        }

        public void AddNewHouseToClient(decimal value)
        {
            var house = _realtor.CreateHouse(value);
            _client.AddEstate(house);
        }

        public void AddNewApartmentToClient(decimal value)
        {
            var apartment = _realtor.CreateApartment(value);
            _client.AddEstate(apartment);
        }

        public decimal GetClientPropertyTotalValue()
        {
            return _client.GetTotalValue();
        }
    }

    public class Client
    {
        private readonly List<RealEstate> _estates = new List<RealEstate>();

        public void AddEstate(RealEstate property)
        {
            _estates.Add(property);
        }

        public decimal GetTotalValue()
        {
            return _estates.Sum(p => p.Value);
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
