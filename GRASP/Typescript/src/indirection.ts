{
    class Program
    {
        static Main(): void
        {
            const client = new Client();

            const mediator = new RealEstateMediator(client);

            mediator.CreateHouse(120000);
            mediator.CreateApartment(80000);

            console.log(`Total cost: ${client.GetTotalValue()} usd.`);
        }
    }

    interface IMediator
    {
        CreateHouse(value: number): void;
        CreateApartment(value: number): void;
    }

    class RealEstateMediator implements IMediator
    {
        private readonly realtor = new Realtor();
        private readonly client: Client;

        constructor(client: Client)
        {
            this.client = client;
        }

        public CreateHouse(value: number): void
        {
            this.client.AddEstate(this.realtor.CreateHouse(value));
        }

        public CreateApartment(value: number): void
        {
            this.client.AddEstate(this.realtor.CreateApartment(value));
        }
    }

    class Client
    {
        private readonly properties: RealEstate[] = [];

        public AddEstate(property: RealEstate): void
        {
            this.properties.push(property);
        }

        public GetTotalValue(): number
        {
            return this.properties.reduce((total, property) => total + property.Value, 0);
        }
    }

    class Realtor
    {
        public CreateHouse(value: number): House
        {
            return new House(value);
        }

        public CreateApartment(value: number): Apartment
        {
            return new Apartment(value);
        }
    }

    abstract class RealEstate
    {
        public Value: number;

        constructor(value: number)
        {
            this.Value = value;
        }
    }

    class House extends RealEstate
    {
        constructor(value: number)
        {
            super(value);
        }
    }

    class Apartment extends RealEstate
    {
        constructor(value: number)
        {
            super(value);
        }
    }
    Program.Main();
}
