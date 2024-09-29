{
    class Program{
        public static Main():void {
            let houseService: IRealEstateService = new HouseService();
            let apartmentService: IRealEstateService = new ApartmentService();

            let house = houseService.createEstate(140000);
            let apartment = apartmentService.createEstate(60000);

            console.log(`House: ${house.value} usd.`);
            console.log(`Apartment: ${apartment.value} usd.`);
        }
    }
    interface IRealEstateService{
        createEstate(value: number): RealEstate;
    }

    class HouseService implements IRealEstateService{
        public createEstate(value: number): RealEstate {
            return new House(value);
        }
    }

    class ApartmentService implements IRealEstateService{
        public createEstate(value: number): RealEstate {
            return new Apartment(value);
        }
    }

    abstract class RealEstate{
        public value: number;

        constructor(value: number){
            this.value = value;
        }
    }

    class House extends RealEstate{
        constructor(value: number){
            super(value);
        }
    }

    class Apartment extends RealEstate{
        constructor(value: number){
            super(value);
        }
    }

    Program.Main();
}
