using System;
using System.Data;
using System.Diagnostics;
using System.Net.WebSockets;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using C_.Builders;
using C_.Directors;
using C_.Entities;
using C_.Entities.States;

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
            // for(int i = 0; i < _usersCount; i++)
            //     AddTestData(agency, i);
            var a = new Apartment($"Apartment Address", $"Description", 50, 100000, "New", 2);
            var ro = new Room($"Room Address", $"Room Description", 20, 50000, "Old");
            var h = new House($"House Address", $"House Description", 100, 200000, "Middle aged");
            a.State = new SellableState(a);
            ro.State = new RentableState(ro);
            h.State = new BuyableState(h);
            a.Sell(new Customer(){NameAndSurname = "Vasya Pupkin"});
            ro.SetEstateToBuy(new Customer(){NameAndSurname = "Vasya Pupkin"}, 50000);
            h.SetEstateToBuy(new Customer(){NameAndSurname = "Vasya Pupkin"}, 200000);
            h.SetEstateToBuy(new Customer(){NameAndSurname = "Vasya Pupkin"}, 200000);
        }

        public static void AddTestData(Agency agency, int index)
        {
            var a = new Apartment($"Apartment Address {index}", $"Description {index}", 50, 100000, "New", 2);
            var ro = new Room($"Room Address {index}", $"Room Description {index}", 20, 50000, "Old");
            var h = new House($"House Address {index}", $"House Description {index}", 100, 200000, "Middle aged");
            a.State = new SellableState(a);
            ro.State = new RentableState(ro);
            h.State = new BuyableState(h);
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
