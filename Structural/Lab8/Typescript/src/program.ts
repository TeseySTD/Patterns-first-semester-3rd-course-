import { HouseBuilder } from './Builders/house_builder';
import { ApartmentBuilder } from './Builders/apartment_builder';
import { EstateDirector } from './Directors/estate_director';
import { CheapEstateDirector } from './Directors/cheap_estate_director';
import { LuxuryEstateDirector } from './Directors/luxury_estate_director';
import { dir } from 'console';
class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        let director : EstateDirector;
        director = new LuxuryEstateDirector(new ApartmentBuilder());
        console.log(`Create new luxury apartment ${director.BuildDefault().toString()}`);
        director = new CheapEstateDirector(new HouseBuilder());
        console.log(`Create new cheap house ${director.BuildDefault().toString()}`);
    }
}

Program.main([]);