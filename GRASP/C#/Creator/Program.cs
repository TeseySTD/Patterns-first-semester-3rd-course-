using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
public class Program
    {
        public static void Main(string[] args)
        {
            Realtor realtor = new Realtor();
            Client client = new Client();

            client.AddEstate(realtor.CreateHouse(120000));
            client.AddEstate(realtor.CreateApartment(80000));

            Console.WriteLine("Client added new estate.");
        }
    }

    public class Client
    {
        private readonly List<RealEstate> _estates = new List<RealEstate>();

        public void AddEstate(RealEstate estate)
        {
            _estates.Add(estate);
            Console.WriteLine($"Added: {estate.GetType().Name} price {estate.Value} usd.");
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

        public Room CreateRoom(decimal value)
        {
            return new Room(value);
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
