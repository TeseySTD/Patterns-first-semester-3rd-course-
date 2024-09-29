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
        private static AbstractTemplate _addTemplate;

        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            foreach (AbstractTemplate strategy in new List<AbstractTemplate>{
                new AddApartmentTemplate(),
                new AddRoomTemplate("test", "test", "1", "1", "test"),
                new AddHouseTemplate("house", "house", "1", "1", "test"),
                new AddHouseTemplate("house", "house", "1", "1"),
                new AddRoomTemplate("error"),})
            {
                _addTemplate = strategy;
                AddEstate();
            };
            Console.WriteLine("End testing... \n\n");
        }

        private static void AddEstate(){
            Console.WriteLine(_addTemplate.Execute());
        }

    }
}
