{
    class Program
    {
        public static Main(): void
        {
            let client = new Client();
            client.AddEstate(new House(100000));
            client.AddEstate(new Apartment(75000));
            client.AddEstate(new Room(20000));

            console.log(`Total cost of all estates: ${client.GetTotalValue()} usd.`);
        }
    }

    class Client
    {
        private _estates: RealEstate[] = [];

        public GetTotalValue(): number
        {
            return this._estates.reduce((sum, p) => sum + p.Value, 0);
        }

        public AddEstate(estate: RealEstate): void
        {
            this._estates.push(estate);
        }
    }

    abstract class RealEstate
    {
        public Value: number;
    }

    class House extends RealEstate
    {
        constructor(value: number)
        {
            super();
            this.Value = value;
        }
    }

    class Apartment extends RealEstate
    {
        constructor(value: number)
        {
            super();
            this.Value = value;
        }
    }

    class Room extends RealEstate
    {
        constructor(value: number)
        {
            super();
            this.Value = value;
        }
    }

    Program.Main();
}