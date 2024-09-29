﻿using System;
using System.Diagnostics;
using System.Reflection.Emit;
using System.Runtime.InteropServices;

namespace C_
{    
    class Program
    {
        private static int _usersCount = 10;
        private static Thread[] _userThreads = new Thread[_usersCount];

        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            CreateAndStartUserThreads();
            PrintFinalAgencyState();
        }

        public static void CreateAndStartUserThreads(){
            for(int i = 0; i < _usersCount; i++){
                var s = $"Thread {i + 1}";
                _userThreads[i] = new Thread(() =>
                {
                    TestAgency(s);
                });
            }

            for(int i = 0; i < _usersCount; i++)
                _userThreads[i].Start();

            for(int i = 0; i < _usersCount; i++)
                _userThreads[i].Join();
        }

        public static void TestAgency(string threadName)
        {
            Agency agency = Agency.GetInstance();
            Console.WriteLine($"{threadName}: Agency hash code = {agency.GetHashCode()}");

            AddTestData(agency, threadName);
        }

        static void AddTestData(Agency agency, string threadName)
        {
            agency.AddEstate(new Apartment($"Address {threadName}", $"Description {threadName}", 50, 100000, "New", 2));
            agency.AddRealtor(new Realtor(threadName.GetHashCode(), $"Realtor {threadName}", "123-456-7890", $"realtor{threadName}@example.com", 2));
            agency.AddEstate(new Room($"Room Address {threadName}", $"Room Description {threadName}", 20, 50000, "Old"));
            agency.AddEstate(new House($"House Address {threadName}", $"House Description {threadName}", 100, 200000, "Middle aged"));
        }

        static void PrintFinalAgencyState()
        {
            var agency = Agency.GetInstance();
            Console.WriteLine("Final state Agency:");
            Console.WriteLine($"Apartments: {agency.Apartments.Count}");
            Console.WriteLine($"Realtors: {agency.Realtors.Count}");
            Console.WriteLine($"Rooms: {agency.Rooms.Count}");
            Console.WriteLine($"Houses: {agency.Houses.Count}");

            //Lab 1 code
            // RealEstate.PrintAllInfoAboutEstates(agency.Apartments);
            // RealEstate.PrintAllInfoAboutEstates(agency.Rooms);
            // RealEstate.PrintAllInfoAboutEstates(agency.Houses);

            //Lab 2 code
            // agency.PrintRandomEstateAndClones();
        
            // Lab3 code
            agency.RentOrSellRandomEstate();
        }
    }
}
