{

    class Program
    {
        static Main(): void
        {
            let client = new Client();
            let repository = new RealEstateRepository();

            client.addProperty(new House(150000));
            client.addProperty(new Apartment(85000));

            repository.saveClientEstates(client);

            console.log("Estates of client stored in database");
        }
    }

    class Client
    {
        private _properties: RealEstate[] = [];

        public addProperty(property: RealEstate): void
        {
            this._properties.push(property);
        }

        public getProperties(): RealEstate[]
        {
            return this._properties;
        }
    }

    class RealEstateRepository
    {
        public saveClientEstates(client: Client): void
        {
            for (const property of client.getProperties())
            {
                console.log(`Stored: ${property.constructor.name} price ${property.getValue()} usd.`);
            }
        }
    }

    abstract class RealEstate
    {
        protected value: number;

        public getValue(): number
        {
            return this.value;
        }
    }

    class House extends RealEstate
    {
        constructor(value: number)
        {
            super();
            this.value = value;
        }
    }

    class Apartment extends RealEstate
    {
        constructor(value: number)
        {
            super();
            this.value = value;
        }
    }
    Program.Main();
}