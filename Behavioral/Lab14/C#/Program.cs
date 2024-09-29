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
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");

            List<RealEstate> estates = new List<RealEstate>
            {
                new House("House address", "House description", 50, 1000, "New"),
                new Room("Room address", "Room description", 50, 1000, "New"),
                new Apartment("Apartment address", "Apartment description", 50, 1000, "New", 3)
            };
            var realtorChain = new RealtorApartment("RealtorApartment name", "RealtorApartment phone", "RealtorApartment email", 5);
            realtorChain.SetNext(new RelatorHouse("RelatorHouse name", "RelatorHouse phone", "RelatorHouse email", 5))
                        .SetNext(new RealtorRoom("RealtorRoom name", "RealtorRoom phone", "RealtorRoom email", 5));

            foreach(var estate in estates){
                realtorChain.SellEstate(new Customer("Customer name", "Customer phone", "Customer email"), estate);
            }

            Console.WriteLine("End testing... \n\n");
        }

    }
}
