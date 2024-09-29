using System;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IRealEstateFactory factory = new RealEstateFactory();

            var house = factory.CreateEstate("House", 180000);
            var apartment = factory.CreateEstate("Apartment", 95000);

            Console.WriteLine($"House with price {house.Value} usd.");
            Console.WriteLine($"Apartment with price {apartment.Value} usd.");
        }
    }

    public interface IRealEstateFactory
    {
        RealEstate CreateEstate(string type, decimal value);
    }

    public class RealEstateFactory : IRealEstateFactory
    {
        public RealEstate CreateEstate(string type, decimal value)
        {
            switch (type)
            {
                case "House":
                    return new House(value);
                case "Apartment":
                    return new Apartment(value);
                case "Room":
                    return new Room(value);
                default:
                    throw new ArgumentException("Unknown estate type.");
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

    public class Room : RealEstate
    {
        public Room(decimal value)
        {
            Value = value;
        }
    }
}
