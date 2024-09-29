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
            EstateDirector director;

            director = new LuxuryEstateDirector(new ApartmentBuilder());
            Console.WriteLine($"Create new luxury apartment {director.BuildDefault()}.");
            director = new CheapEstateDirector(new HouseBuilder());
            Console.WriteLine($"Create new cheap house {director.BuildDefault()}.");
        }

    }
}
