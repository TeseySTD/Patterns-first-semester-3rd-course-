{

    class Program
    {
        static Main(): void {
            let estates: RealEstate[] = [
                new House(170000),
                new Apartment(90000),
                new Room(25000)
            ];

            estates.forEach(estate => console.log(estate.toString()));
        }
    }

    abstract class RealEstate
    {
        constructor(protected value: number) { }

        toString(): string {
            return `Estate: ${this.constructor.name}, Price: ${this.value} usd.`;
        }
    }

    class House extends RealEstate { }
    class Apartment extends RealEstate { }
    class Room extends RealEstate { }

    Program.Main();
}