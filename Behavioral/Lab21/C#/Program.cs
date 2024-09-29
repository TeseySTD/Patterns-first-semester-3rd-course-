using System;
using System.Diagnostics;
using System.Net.WebSockets;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using C_.Builders;
using C_.TemplateMethods;
using C_.Directors;
using C_.Entities;

namespace C_
{    
    class Program
    {
        private static AbstractStrategy _addStrategy;
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            foreach (AbstractStrategy strategy in new List<AbstractStrategy>{
                new AddApartmentStrategy(),
                new AddHouseStrategy("house", "house", "1", "1", "test"),
                new AddRoomStrategy(),})
            {
                _addStrategy = strategy;
                AddEstate();
            };
            Console.WriteLine("End testing... \n\n");
        }

        private static void AddEstate(){
            Console.WriteLine(_addStrategy.Execute());
        }

    }
}
