{
    class EstateHelper
    {
        public calculateTotalValue(properties: RealEstate[]): number
        {
            return properties.reduce((prev, curr) => prev + curr.Value, 0);
        }
    }

    class Client
    {
        private properties: RealEstate[] = [];
        private helper: EstateHelper = new EstateHelper();

        public addEstate(property: RealEstate)
        {
            this.properties.push(property);
        }

        public getTotalValue(): number
        {
            return this.helper.calculateTotalValue(this.properties);
        }
    }

    class RealEstate
    {
        public Address: string;
        public Value: number;

        constructor(address: string, value: number)
        {
            this.Address = address;
            this.Value = value;
        }
    }

    class Program
    {
        public static Main(): void
        {
            let client = new Client();
            client.addEstate(new RealEstate("123 Main St", 250000));
            client.addEstate(new RealEstate("456 Oak St", 300000));
            
            console.log(`Total value of properties: ${client.getTotalValue()}`);
        }
    }
    Program.Main();
}