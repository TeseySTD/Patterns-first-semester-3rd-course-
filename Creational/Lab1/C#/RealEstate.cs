﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public abstract class RealEstate
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public double Area { get; set; }
        public double Price { get; set; }
        public string Status 
        { 
            get => _status != null ? _status : "Unknown";
            set
            {
                if (value == "New" || value == "Old" || value == "Middle aged")
                    _status = value;
                else
                    _status = "Unknown";
            } 
        }
        private string _status;

        public RealEstate(string address, string description, double area, double price, string status) { 
            Address = address;
            Description = description;
            Area = area;
            Price = price;
            Status = status;
        }

        public override string ToString(){
            return $"Id: {Id}, Address: {Address},\n Description: {Description},\nArea: {Area}, Price: {Price}\nStatus: {Status}";
        }

        public static void PrintAllInfoAboutEstates(IEnumerable<RealEstate>  realEstates){
            foreach (RealEstate realEstate in realEstates){
                Console.WriteLine(realEstate.ToString());
            }
            Console.WriteLine("\n");
        }

    }
}
