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
            Agency agency = Agency.GetInstance();
            RealtorSubsystem realtorSubsystem = new RealtorSubsystem();

            Console.WriteLine("Start testing... \n\n");
            TestAgency();
            realtorSubsystem.MainAction(agency.Realtors);
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
