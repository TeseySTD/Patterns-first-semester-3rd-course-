{
    class Client
    {
        private name: string;
        private _estates: RealEstate[] = [];

        constructor(name: string)
        {
            this.name = name;
        }

        public addEstate(property: RealEstate)
        {
            this._estates.push(property);
        }

        public displayProperties()
        {
            this._estates.forEach(property =>
            {
                console.log(`${this.name}'s estate at: ${property.address}, price : ${property.price}`);
            });
        }
    }

    class RealEstate
    {
        public address: string;
        public price: number;

        constructor(address: string, value: number)
        {
            this.address = address;
            this.price = value;
        }
    }


    class Program
    {
        public static main(): void
        {
            let client = new Client("Ivan Ivanov");
            client.addEstate(new RealEstate("123 Main St", 250000));
            client.displayProperties();
        }
    }
    
    Program.main();
}