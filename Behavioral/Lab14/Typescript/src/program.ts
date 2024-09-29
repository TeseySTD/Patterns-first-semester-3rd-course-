import { Room } from './Entities/room';
import { Apartment } from './Entities/apartment';
import { Customer } from './Entities/customer';
import { House } from './Entities/house';
import { RealEstate } from './Entities/real_estate';
import { RealtorApartment } from './Entities/realtor_apartment';
import { RealtorHouse } from './Entities/realtor_house';
import { RealtorRoom } from './Entities/realtor_room';
class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");

        const estates: RealEstate[] = [
            new House("House address", "House description", 50, 1000, "New"),
            new Room("Room address", "Room description", 50, 1000, "New"),
            new Apartment("Apartment address", "Apartment description", 50, 1000, "New", 3)
        ];
        const realtorChain = new RealtorApartment("RealtorApartment name", "RealtorApartment phone", "RealtorApartment email", 5);
        realtorChain.SetNext(new RealtorHouse("RelatorHouse name", "RelatorHouse phone", "RelatorHouse email", 5))
            .SetNext(new RealtorRoom("RealtorRoom name", "RealtorRoom phone", "RealtorRoom email", 5));

        estates.forEach(estate => realtorChain.SellEstate(new Customer("Customer name", "Customer phone", "Customer email"), estate));

        console.log("End testing... \n\n");
    }
}

Program.main([]);