﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class Agency
    {
        private Agency() {
            _apartments = new List<Apartment>();
            _realtors = new List<Realtor>();
            _houses = new List<House>();
            _rooms = new List<Room>();
        }

        //Instances
        private static Agency _instance;
        private static List<Apartment> _apartments;
        private static List<Room> _rooms;
        private static List<House> _houses;
        private static List<Realtor> _realtors;

        //Locks
        private static readonly object _lockInstance = new object();
        private static readonly object _lockApartments = new object();
        private static readonly object _lockRooms = new object();
        private static readonly object _lockHouses = new object();
        private static readonly object _lockRealtors = new object();

        public static Agency GetInstance()
        {
            if (_instance == null)
            {
                lock (_lockInstance)
                {
                    if (_instance == null)
                        _instance = new Agency();
                }
            }
            return _instance;
        }

        public  List<Apartment> Apartments 
        {
            get 
            {
                lock (_lockApartments)
                {
                    return _apartments;
                }
            }
        }
        public List<Room> Rooms
        {
            get 
            {
                lock (_lockRooms)
                {
                    return _rooms;
                }
            }
        }
        public List <House> Houses
        {
            get 
            {
                lock (_lockHouses)
                {
                    return _houses;
                }
            }
        }
        public List<Realtor> Realtors 
        { 
            get 
            {
                lock (_lockRealtors)
                {
                    return _realtors;
                }
            }
        }

        public void AddRealtor(Realtor realtor){
            lock (_lockRealtors) {
                _realtors.Add(realtor);
            }
        }
        public void RemoveRealtor(Realtor realtor){
            lock(_lockRealtors) {
                _realtors.Remove(realtor);
            }
        }

        public void AddEstate(RealEstate estate){
            switch (estate.GetType().Name) {
                case "Apartment":
                    lock(_lockApartments){
                        _apartments.Add((Apartment)estate);
                    };
                    break;
                case "Room":
                    lock(_lockRooms){
                        _rooms.Add((Room)estate);
                    };
                    break;
                case "House":
                    lock(_lockHouses){
                        _houses.Add((House)estate);
                    };
                    break;
            }
        }

        public void RemoveEstate(RealEstate estate){
            switch (estate.GetType().Name) {
                case "Apartment":
                    lock(_lockApartments){
                        _apartments.Remove((Apartment)estate);
                    };
                    break;
                case "Room":
                    lock(_lockRooms){
                        _rooms.Remove((Room)estate);
                    };
                    break;
                case "House":
                    lock(_lockHouses){
                        _houses.Remove((House)estate);
                    };
                    break;
            }
        }

        public void PrintRandomEstateAndClones(){
            Random r = new Random();
            int i = r.Next(2);
            IEnumerable<RealEstate> estate = new List<RealEstate>();
            switch (i){
                case 0:
                    estate = Apartments;
                    break;
                case 1:
                    estate = Rooms;
                    break;
                case 2:
                    estate = Houses;
                    break;
            }
            
            if(estate.Count() > 0){
                int j = r.Next(estate.Count() - 1);
                var el = estate.ElementAt(j);
                var elClone = el.Clone();
                var elCopy = el.ShallowCopy();

                Console.WriteLine($"Original: {el}\n");
                Console.WriteLine($"Clone: {elClone}\n");
                Console.WriteLine($"Shallow copy: {elCopy}\n");

                Console.WriteLine("Change shallow copy realtor name to 'Jane Doe'...\n");
                elCopy.Realtor.NameAndSurname = "Jane Doe";
                Console.WriteLine($"Original after changing shallow copy: {el}\n");
                Console.WriteLine($"Clone: {elClone}");
            }

        }
    }
}
