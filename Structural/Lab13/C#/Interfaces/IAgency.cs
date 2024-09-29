using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.Interfaces
{
    public interface IAgency
    {
        // List<Apartment> Apartments { get; }
        // List<Room> Rooms { get; }
        // List<House> Houses { get; }
        // List<Realtor> Realtors { get; }

        public RealEstate FindEstateByID(int id);
    }
}
