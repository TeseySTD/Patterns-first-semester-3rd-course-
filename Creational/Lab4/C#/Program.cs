using System;
using System.Diagnostics;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using C_.Factories;

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
                    int r = new Random().Next(0,2);
                    EstateFactory f;
                    switch (r) {
                        case 0:
                            f = new EstateToBuyFactory();
                            break;
                        case 1:
                            f = new EstateToRentFactory();
                            break;
                        default:
                            f = new EstateToSellFactory();
                            break;
                    }
                    TestAgency(s,f);
                });
            }

            for(int i = 0; i < _usersCount; i++)
                _userThreads[i].Start();

            for(int i = 0; i < _usersCount; i++)
                _userThreads[i].Join();
        }

        public static void TestAgency(string threadName, EstateFactory f)
        {
            Agency agency = Agency.GetInstance();
            Console.WriteLine($"{threadName}: Agency hash code = {agency.GetHashCode()}");

            AddTestData(agency, f, threadName);
        }

        static void AddTestData(Agency agency, EstateFactory factory, string threadName)
        {
            agency.AddEstate(factory.CreateEstate("apartment"));
            agency.AddEstate(factory.CreateEstate("room"));
            agency.AddEstate(factory.CreateEstate("house"));
        }

        static void PrintFinalAgencyState()
        {
            var agency = Agency.GetInstance();
            Console.WriteLine("Final state Agency:");
            // Console.WriteLine($"Apartments: {agency.Apartments.Count}");
            // Console.WriteLine($"Realtors: {agency.Realtors.Count}");
            // Console.WriteLine($"Rooms: {agency.Rooms.Count}");
            // Console.WriteLine($"Houses: {agency.Houses.Count}");

            RealEstate.PrintAllInfoAboutEstates(agency.Apartments);
            RealEstate.PrintAllInfoAboutEstates(agency.Rooms);
            RealEstate.PrintAllInfoAboutEstates(agency.Houses);

            //Lab 2 code
            // agency.PrintRandomEstateAndClones();
        
            // Lab3 code
            // agency.RentOrSellRandomEstate();


        }
    }
}
