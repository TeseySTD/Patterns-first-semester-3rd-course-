{class Program {
    public static Main(args: string[]): void {
        const realtor = new Realtor();
        const client = new Client();

        client.AddEstate(realtor.CreateHouse(120000));
        client.AddEstate(realtor.CreateApartment(80000));

        console.log("Client added new estate.");
    }
}

class Client {
    private readonly estates: RealEstate[] = [];

    public AddEstate(estate: RealEstate): void {
        this.estates.push(estate);
        console.log(`Added: ${estate.constructor.name} price ${estate.Value} usd.`);
    }
}

class Realtor {
    public CreateHouse(value: number): House {
        return new House(value);
    }

    public CreateApartment(value: number): Apartment {
        return new Apartment(value);
    }

    public CreateRoom(value: number): Room {
        return new Room(value);
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

class Room extends RealEstate {
    constructor(value: number) {
        super();
        this.Value = value;
    }
}
Program.Main([]);
}


