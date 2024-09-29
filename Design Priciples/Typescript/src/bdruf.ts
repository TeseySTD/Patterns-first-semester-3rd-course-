{
    abstract class RealEstate
    {
        Value: number;
        Address: string;
        abstract DisplayDetails(): void;
    }

    class House extends RealEstate
    {
        Bedrooms: number;
        Bathrooms: number;

        constructor(address: string, value: number, bedrooms: number, bathrooms: number)
        {
            super();
            this.Address = address;
            this.Value = value;
            this.Bedrooms = bedrooms;
            this.Bathrooms = bathrooms;
        }

        DisplayDetails(): void
        {
            console.log(`House at ${this.Address} with ${this.Bedrooms} bedrooms and ${this.Bathrooms} bathrooms, valued at ${this.Value}`);
        }
    }

    class Apartment extends RealEstate
    {
        Floor: number;

        constructor(address: string, value: number, floor: number)
        {
            super();
            this.Address = address;
            this.Value = value;
            this.Floor = floor;
        }

        DisplayDetails(): void
        {
            console.log(`Apartment at ${this.Address} on floor ${this.Floor}, valued at ${this.Value}`);
        }
    }

    class Program
    {
        static Main(): void
        {
            const house: RealEstate = new House("123 Main St", 300000, 3, 2);
            const apartment: RealEstate = new Apartment("456 Oak St", 150000, 5);
            
            house.DisplayDetails();
            apartment.DisplayDetails();
        }
    }
    Program.Main();
}