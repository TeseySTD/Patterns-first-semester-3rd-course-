using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities
{
    public class TaxCalculatorVisitor : IEstateVisitor
    {
        public void Visit(RealEstate estate){
            switch (estate){
                case House house:
                    VisitHouse(house);
                    break;
                case Apartment apartment:
                    VisitApartment(apartment);
                    break;
                case Room room:
                    VisitRoom(room);
                    break;
                default:
                    throw new Exception("Unknown RealEstate type");
            }
        }
        protected void VisitHouse(House house)
        {
            double tax = house.Area * 1.5; 
            Console.WriteLine($"House at {house.Address}: Tax is {tax}");
        }

        protected void VisitApartment(Apartment apartment)
        {
            double tax = apartment.Area * 1.2; 
            Console.WriteLine($"Apartment at {apartment.Address}: Tax is {tax}");
        }

        protected void VisitRoom(Room room)
        {
            double tax = room.Area * 0.8;
            Console.WriteLine($"Room at {room.Address}: Tax is {tax}");
        }
    }

}
