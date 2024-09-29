using System;
using System.Diagnostics;
using System.Net.WebSockets;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using C_.Builders;
using C_.Directors;
using C_.Entities;

namespace C_
{    
    class Program
    {
        private static int _usersCount = 10;
        static void Main(string[] args)
        {
            
            Console.WriteLine("Start testing... \n\n");
            var factory = new RealEstateFlyweightFactory(
                new RealEstateFlyweight(true, true, false, true, true, false),
                new RealEstateFlyweight(false, true, true, true, false, true),
                new RealEstateFlyweight(true, false, true, false, true, true)
            );

            var a = new Apartment(
                "123 Main St", "Nice apartment", 100, 200000, "New", 5,
                factory.GetFlyweight(new RealEstateFlyweight(true, true, false, true, true, false))
            );
            var r = new Room(
                "456 Elm St", "Cool room", 200, 500000, "Standard",
                factory.GetFlyweight(new RealEstateFlyweight(true, false, true, false, true, true))
            );
            var h = new House(
                "456 Elm St", "Beautiful house", 200, 500000, "Old",
                factory.GetFlyweight(new RealEstateFlyweight(false, false, true, true, false, true))
            );
            Console.WriteLine($"Created estates: {a}\n {r}\n {h}\n");

            Console.WriteLine("\nEnd testing... \n\n");
        }


        public static void TestAgency(){
            Agency agency = Agency.GetInstance();
            for(int i = 0; i < _usersCount; i++)
                AddTestData(agency, i);
        }

        public static void AddTestData(Agency agency, int index)
        {
            var a = new Apartment($"Apartment Address {index}", $"Description {index}", 50, 100000, "New", 2);
            var ro = new Room($"Room Address {index}", $"Room Description {index}", 20, 50000, "Old");
            var h = new House($"House Address {index}", $"House Description {index}", 100, 200000, "Middle aged");
            agency.AddEstate(a);
            agency.AddEstate(ro);
            agency.AddEstate(h);
            var r = new Realtor($"Realtor {index}", "123-456-7890", $"realtor{index}@example.com", 2);
            r.RealEstates.Add(a);
            r.RealEstates.Add(ro);
            r.RealEstates.Add(h);
            agency.AddRealtor(r);
        }
    }
}
