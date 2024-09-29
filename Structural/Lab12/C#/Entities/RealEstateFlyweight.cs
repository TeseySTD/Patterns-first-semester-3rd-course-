using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace C_.Entities
{
    public class RealEstateFlyweight
    {
        public bool Furnished { get; private set; }
        public bool Parking { get; private set; }
        public bool Balcony { get; private set; }
        public bool Elevator { get; private set; }
        public bool AirConditioning { get; private set; }
        public bool IsUtilitiesIncluded { get; private set; }

        public RealEstateFlyweight(bool furnished, bool parking, bool balcony, bool elevator, bool airConditioning, bool isUtilitiesIncluded)
        {
            Furnished = furnished;
            Parking = parking;
            Balcony = balcony;
            Elevator = elevator;
            AirConditioning = airConditioning;
            IsUtilitiesIncluded = isUtilitiesIncluded;
        }

        public override string ToString()
        {
            return $"Furnished: {Furnished}, Parking: {Parking}, Balcony: {Balcony}, Elevator: {Elevator}, Air conditioning: {AirConditioning}, Utilities included: {IsUtilitiesIncluded}\n";
        }
    }
}
