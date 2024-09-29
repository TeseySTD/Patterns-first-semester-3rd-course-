{
    abstract class RealEstate
    {
        public value: number;
        public address: string;
        public abstract displayDetails(): void;
    }

    class House extends RealEstate
    {
        public bedrooms: number;
        public bathrooms: number;

        public constructor(address: string, value: number, bedrooms: number, bathrooms: number)
        {
            super();
            this.address = address;
            this.value = value;
            this.bedrooms = bedrooms;
            this.bathrooms = bathrooms;
        }

        public displayDetails(): void
        {
            console.log(`House at ${this.address} with ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms, valued at ${this.value}`);
        }
    }

    class Apartment extends RealEstate
    {
        public floor: number;

        public constructor(address: string, value: number, floor: number)
        {
            super();
            this.address = address;
            this.value = value;
            this.floor = floor;
        }

        public displayDetails(): void
        {
            console.log(`Apartment at ${this.address} on floor ${this.floor}, valued at ${this.value}`);
        }
    }

    class Program
    {
        public static main(): void
        {
            const list: RealEstate[] = [];

            for (let i = 0; i < 100; i++)
            {
                list.push(new House(`House ${i}`, 250000, 3, 2));
                list.push(new Apartment(`Apartment ${i}`, 150000, 5));
            }

            list.forEach(estate => estate.displayDetails());
        }
    }
    Program.main();
}