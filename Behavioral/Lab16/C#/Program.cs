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
            EstateList estateList = new EstateList();
            estateList.AddItem(new Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25));
            estateList.AddItem(new Room("Dungeon 143", "tra ta ta", 50, 1000, "New"));
            estateList.AddItem(new House("Selo Perebykivtsi", "dacha olega", 20000, 2000000, "Old"));

            foreach (RealEstate realEstate in estateList)
                Console.WriteLine(realEstate);
            Console.WriteLine("Change direction.....\n\n\n\n");
            estateList.ReverseDirection();
            foreach(RealEstate realEstate in estateList)
                Console.WriteLine(realEstate);
            Console.WriteLine($"End testing... \n\n");
        }

    }
}
