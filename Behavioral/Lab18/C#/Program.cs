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
            List<RealEstate> estateList = new List<RealEstate>
            {
                new Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25),
                new Room("Dungeon 143", "tra ta ta", 50, 1000, "New"),
                new House("Selo Perebykivtsi", "dacha olega", 20000, 2000000, "Old")
            };

            var iterator = new AlphabeticalOrderIterator(estateList, false);

            iterator.MoveNext();
            Console.WriteLine("Current element: " + iterator.Current());

            var savedState = iterator.SaveState();
            Console.WriteLine("\nSaved position: " + iterator.Key());

            iterator.MoveNext();
            Console.WriteLine("\nCurrent element after move: " + iterator.Current());

            iterator.RestoreState(savedState);
            Console.WriteLine("\nRestored element: " + iterator.Current());

            Console.WriteLine($"End testing... \n\n");
        }

    }
}
