{
    class Program
    {
        public static Main(): void {
            const factory: IRealEstateFactory = new RealEstateFactory();

            const house: RealEstate = factory.CreateEstate("House", 180000);
            const apartment: RealEstate = factory.CreateEstate("Apartment", 95000);

            console.log(`House with price ${house.Value} usd.`);
            console.log(`Apartment with price ${apartment.Value} usd.`);
        }
    }

    interface IRealEstateFactory
    {
        CreateEstate(type: string, value: number): RealEstate;
    }

    class RealEstateFactory implements IRealEstateFactory
    {
        public CreateEstate(type: string, value: number): RealEstate {
            switch (type) {
                case "House":
                    return new House(value);
                case "Apartment":
                    return new Apartment(value);
                case "Room":
                    return new Room(value);
                default:
                    throw new Error("Unknown estate type.");
            }
        }
    }

    abstract class RealEstate
    {
        protected constructor(public Value: number) { }
    }

    class House extends RealEstate
    {
        public constructor(value: number) {
            super(value);
        }
    }

    class Apartment extends RealEstate
    {
        public constructor(value: number) {
            super(value);
        }
    }

    class Room extends RealEstate
    {
        public constructor(value: number) {
            super(value);
        }
    }
    Program.Main();
}