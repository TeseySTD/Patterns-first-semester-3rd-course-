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
        private static int _usersCount = 2;
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            TestAgency();
            Console.WriteLine("\nEnd testing... \n\n");
        }


        public static void TestAgency(){
            Agency agency = Agency.GetInstance();
            for(int i = 0; i < _usersCount; i++)
                AddTestData(agency, i);
            foreach(var realtor in agency.Realtors){
                realtor.NotifyCustomers();
            }
        }

        public static void AddTestData(Agency agency, int index)
        {
            var rand = new Random();

            var a = new Apartment($"Apartment Address {index}", $"Description {index}", 50, rand.NextInt64(2000, 200000), "New", 2);
            var ro = new Room($"Room Address {index}", $"Room Description {index}", 20, rand.NextInt64(2000, 200000), "Old");
            var h = new House($"House Address {index}", $"House Description {index}", 100, rand.NextInt64(2000, 200000), "Middle aged");
            agency.AddEstate(a);
            agency.AddEstate(ro);
            agency.AddEstate(h);
            var r = new Realtor($"Realtor {index}", "123-456-7890", $"realtor{index}@example.com", 2);
            r.RealEstates.Add(a);
            r.RealEstates.Add(ro);
            r.RealEstates.Add(h);
            agency.AddRealtor(r);
            var customer1 = new Customer($"Customer1", "123-456-7890", $"customer1@example.com");
            var customer2 = new Customer($"Customer2", "234-456-7890", $"customer2@example.com");
            r.Customers.Add(customer1);
            r.Customers.Add(customer2);
        }
    }
}
