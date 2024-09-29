{
    abstract class RealEstate
    {
        abstract getValue(): number;
    }

    class House extends RealEstate
    {
        getValue(): number { return 250000; }
    }

    class Apartment extends RealEstate
    {
        getValue(): number { return 150000; }
    }

    class Program
    {
        static main(): void {
            let realEstate: RealEstate = new House();
            console.log(`Value of the property: ${realEstate.getValue()}`); // House

            realEstate = new Apartment();
            console.log(`Value of the property: ${realEstate.getValue()}`); // Apartment
        }
    }

    Program.main();
}