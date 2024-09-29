{
    class Program
    {
        public static Main(): void {
            let client = new Client();
            client.AddEstate(new House(150000));
            client.AddEstate(new Apartment(70000));

            console.log(`Total cost of all estates: ${client.GetTotalValue()} грн.`);
        }
    }

    class Client
    {
        private _estates: RealEstate[] = [];
        public AddEstate(estate: RealEstate): void {
            this._estates.push(estate);
        }

        public GetTotalValue(): number {
            return this._estates.reduce((prev, current) => prev + current.Value, 0);
        }
    }

    abstract class RealEstate
    {
        public Value: number;
    }

    class House extends RealEstate
    {
        constructor(value: number) {
            super();
            this.Value = value;
        }
    }

    class Apartment extends RealEstate
    {
        constructor(value: number) {
            super();
            this.Value = value;
        }
    }
    Program.Main();
}