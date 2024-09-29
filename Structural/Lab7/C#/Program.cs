using System;
using System.Diagnostics;
using System.Net.WebSockets;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using C_.Builders;
using C_.Entities;

namespace C_
{    
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            Customer customer = new Customer();
            ApartmentBuilder apartmentBuilder = new ApartmentBuilder();
            var apartment = apartmentBuilder.SetBalcony().SetParking().SetAddress("XZ").GetEstate();
            var price = 300000;
            PriceAdapter adapter = new PriceAdapter(apartment);
            Console.WriteLine($"Sell apartment with price: {price} UAH");
            customer.SetToBuy(adapter, 300000);
        }

    }
}
