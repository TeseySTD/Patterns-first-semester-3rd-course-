{
    class Program {
        public static Main(args: string[]): void {
            const realtor = new Realtor();
            const client = new Client();
            const controller = new RealEstateController(realtor, client);

            controller.AddNewHouseToClient(130000);
            controller.AddNewApartmentToClient(70000);

            console.log(`Total cost of all estates: ${controller.GetClientPropertyTotalValue()} грн.`);
        }
    }

    class RealEstateController {
        private readonly realtor: Realtor;
        private readonly client: Client;

        constructor(realtor: Realtor, client: Client) {
            this.realtor = realtor;
            this.client = client;
        }

        public AddNewHouseToClient(value: number): void {
            const house = this.realtor.CreateHouse(value);
            this.client.AddEstate(house);
        }

        public AddNewApartmentToClient(value: number): void {
            const apartment = this.realtor.CreateApartment(value);
            this.client.AddEstate(apartment);
        }

        public GetClientPropertyTotalValue(): number {
            return this.client.GetTotalValue();
        }
    }

    class Client {
        private readonly estates: RealEstate[] = [];

        public AddEstate(property: RealEstate): void {
            this.estates.push(property);
        }

        public GetTotalValue(): number {
            return this.estates.reduce((prev, current) => prev + current.Value, 0);
        }
    }

    class Realtor {
        public CreateHouse(value: number): House {
            return new House(value);
        }

        public CreateApartment(value: number): Apartment {
            return new Apartment(value);
        }
    }

    abstract class RealEstate {
        public Value: number;
    }

    class House extends RealEstate {
        constructor(value: number) {
            super();
            this.Value = value;
        }
    }

    class Apartment extends RealEstate {
        constructor(value: number) {
            super();
            this.Value = value;
        }
    }
    Program.Main([]);
}
