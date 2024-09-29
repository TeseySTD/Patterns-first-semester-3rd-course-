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
        const iterator = new IEstateIterator([   
                new Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25),
                new Room("Dungeon 143", "tra ta ta", 50, 1000, "New"),
                new House("Velyka 1", "hata olega", 1000, 150000, "Old")
            ],
            true
        )
        console.log("Iterate two estates forward:");
        console.log(iterator.next().value); 
        console.log(iterator.next().value); 

        const savedState = iterator.saveState();
        console.log("Save state:", savedState, "\nMove next");
        console.log(iterator.next().value);

        iterator.restoreState(savedState);
        console.log("Restore state and move next:",iterator.next().value); 
        console.log(`End testing... \n\n`);
    }
}

Program.main([]);