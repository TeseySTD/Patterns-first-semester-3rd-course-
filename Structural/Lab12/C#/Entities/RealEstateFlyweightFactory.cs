using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace C_.Entities
{
    public class RealEstateFlyweightFactory
    {
        private Dictionary<string, RealEstateFlyweight> flyweights = new Dictionary<string, RealEstateFlyweight>();

        public RealEstateFlyweightFactory(params RealEstateFlyweight[] args)
        {
            foreach (var elem in args)
            {
                flyweights.Add(GetKey(elem), elem);
            }
        }

        public string GetKey(RealEstateFlyweight key)
        {
            List<string> elements = new List<string>
            {
                key.Furnished.ToString(),
                key.Parking.ToString(),
                key.Balcony.ToString(),
                key.Elevator.ToString(),
                key.AirConditioning.ToString(),
                key.IsUtilitiesIncluded.ToString()
            };


            return string.Join("_", elements);
        }


        public RealEstateFlyweight GetFlyweight(RealEstateFlyweight sharedState)
        {
            string key = this.GetKey(sharedState);

            if (flyweights.Where(t => t.Key == key).Count() == 0)
            {
                Console.WriteLine("RealEstateFlyweightFactory: Can't find a flyweight, creating new one.");
                this.flyweights.Add(key, sharedState);
            }
            else
            {
                Console.WriteLine("FRealEstateFlyweightFactory: Reusing existing flyweight.");
            }
            return this.flyweights.Where(t => t.Key == key).FirstOrDefault().Value;
        }


    }
}
