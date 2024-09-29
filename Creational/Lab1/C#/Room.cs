﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class Room : RealEstate
    {
        
        public Room(string address, string description, double area, double price, string status) :
            base(address, description, area, price, status)
        { }

        public override string ToString(){
            return "Room:\n"+ base.ToString();
        }
    }
}
