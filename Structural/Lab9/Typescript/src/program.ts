import { HouseBuilder } from './Builders/house_builder';
import { ApartmentBuilder } from './Builders/apartment_builder';
import { EstateDirector } from './Directors/estate_director';
import { CheapEstateDirector } from './Directors/cheap_estate_director';
import { LuxuryEstateDirector } from './Directors/luxury_estate_director';
import { EstateContainer } from './Entities/estate_container';
import { RoomBuilder } from './Builders/room_builder';
import { StandardEstateDirector } from './Directors/standard_estate_director';
class Program {
    static main(args: string[]): void {
        let director: EstateDirector;
        const branch1 = new EstateContainer();
        const branch2 = new EstateContainer();
        const estateContainer = new EstateContainer();

        console.log("Start testing... \n\n");
        director = new LuxuryEstateDirector(new ApartmentBuilder());
        branch1.add(director.BuildDefault());
        director = new CheapEstateDirector(new HouseBuilder());
        branch1.add(director.BuildDefault());
        director = new StandardEstateDirector(new RoomBuilder());
        branch2.add(director.BuildDefault());
        branch1.add(branch2);
        estateContainer.add(branch1);
        estateContainer.add(director.BuildDefault());

        estateContainer.printEstateInfo("----");
        console.log("\nEnd testing... \n\n");
    }
}

Program.main([]);