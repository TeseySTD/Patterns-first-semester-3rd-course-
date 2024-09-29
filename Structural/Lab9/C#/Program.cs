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
            EstateDirector director;
            EstateContainer branch1 = new EstateContainer();
            EstateContainer branch2 = new EstateContainer();
            EstateContainer estateContainer= new EstateContainer();

            Console.WriteLine("Start testing... \n\n");
            director = new LuxuryEstateDirector(new ApartmentBuilder());
            branch1.Add(director.BuildDefault());
            director = new CheapEstateDirector(new HouseBuilder());
            branch1.Add(director.BuildDefault());
            director = new StandardEstateDirector(new RoomBuilder());
            branch2.Add(director.BuildDefault());
            branch1.Add(branch2);
            estateContainer.Add(branch1);
            estateContainer.Add(director.BuildDefault());

            estateContainer.PrintEstateInfo("--");
            Console.WriteLine("\nEnd testing... \n\n");
        }

    }
}
