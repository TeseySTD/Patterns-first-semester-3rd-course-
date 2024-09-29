import { HouseBuilder } from './Builders/house_builder';
import { ApartmentBuilder } from './Builders/apartment_builder';
import { EstateDirector } from './Directors/estate_director';
import { CheapEstateDirector } from './Directors/cheap_estate_director';
import { LuxuryEstateDirector } from './Directors/luxury_estate_director';
import { dir } from 'console';
import { IEstateIterator } from './Interfaces/estate_iterator';
import { Apartment } from './Entities/apartment';
import { Room } from './Entities/room';
import { House } from './Entities/house';
class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        const entities = new IEstateIterator([   
                new Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25),
                new Room("Dungeon 143", "tra ta ta", 50, 1000, "New"),
                new House("Velyka 1", "hata olega", 1000, 150000, "Old")
            ]
        )
        for (const entity of entities) {
            console.log(entity.toString());
        }
        console.log("Change direction.....\n\n\n\n")
        entities.changeDirection(true);
        for (const entity of entities) {
            console.log(entity.toString());
        }
        console.log(`End testing... \n\n`);
    }
}

Program.main([]);