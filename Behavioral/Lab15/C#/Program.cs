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
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            ExcecuteCommands(new List<Interfaces.ICommand>{
                new AddApartmentCommand(),
                new AddHouseCommand("house", "house", "1", "1", "test"),
                new AddRoomCommand(),
                new RemoveEstateCommand("apartment", "0"),
                new RemoveEstateCommand("house", "2"),
                new RemoveEstateCommand("house", "1"),
            });
            Console.WriteLine("End testing... \n\n");
        }

        private static void ExcecuteCommands(IEnumerable<Interfaces.ICommand> commands){
            foreach(var command in commands){
                Console.WriteLine(command.Execute());
            }
        }

    }
}
