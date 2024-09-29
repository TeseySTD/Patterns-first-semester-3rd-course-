{
    abstract class RealEstate
    {
        abstract getPrice(): number;
    }

    class House extends RealEstate
    {
        getPrice(): number {
            return 300000;
        }
    }

    class Apartment extends RealEstate
    {
        getPrice(): number {
            return 150000;
        }
    }

    class Program
    {
        static Main(): void {
            const house: RealEstate = new House();
            const apartment: RealEstate = new Apartment();

            console.log(`Price of the house: ${house.getPrice()}`);
            console.log(`Price of the apartment: ${apartment.getPrice()}`);
        }
    }

    Program.Main();
}