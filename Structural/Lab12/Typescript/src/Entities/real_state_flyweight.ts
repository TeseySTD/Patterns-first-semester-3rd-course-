export class RealEstateFlyweight
    {
        public readonly furnished: boolean;
        public readonly parking: boolean;
        public readonly balcony: boolean;
        public readonly elevator: boolean;
        public readonly airConditioning: boolean;
        public readonly isUtilitiesIncluded: boolean;

        constructor(
            furnished: boolean,
            parking: boolean,
            balcony: boolean,
            elevator: boolean,
            airConditioning: boolean,
            isUtilitiesIncluded: boolean
        )
        {
            this.furnished = furnished;
            this.parking = parking;
            this.balcony = balcony;
            this.elevator = elevator;
            this.airConditioning = airConditioning;
            this.isUtilitiesIncluded = isUtilitiesIncluded;
        }

        public toString(): string{
            return `Furnished: ${this.furnished}, Parking: ${this.parking}, Balcony: ${this.balcony}, Elevator: ${this.elevator}, AirConditioning: ${this.airConditioning}, Utilities included: ${this.isUtilitiesIncluded}\n`;
        }
    }
