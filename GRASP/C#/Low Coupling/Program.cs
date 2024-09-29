using System;

namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IRealEstateService houseService = new HouseService();
            IRealEstateService apartmentService = new ApartmentService();

            var house = houseService.CreateEstate(140000);
            var apartment = apartmentService.CreateEstate(60000);

            Console.WriteLine($"House: {house.Value} usd.");
            Console.WriteLine($"Apartment: {apartment.Value} usd.");
        }
    }

    public interface IRealEstateService
    {
        RealEstate CreateEstate(decimal value);
    }

    public class HouseService : IRealEstateService
    {
        public RealEstate CreateEstate(decimal value)
        {
            return new House(value);
        }
    }

    public class ApartmentService : IRealEstateService
    {
        public RealEstate CreateEstate(decimal value)
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
