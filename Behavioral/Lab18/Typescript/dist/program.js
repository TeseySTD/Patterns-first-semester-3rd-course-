"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const estate_iterator_1 = require("./Interfaces/estate_iterator");
const apartment_1 = require("./Entities/apartment");
const room_1 = require("./Entities/room");
const house_1 = require("./Entities/house");
class Program {
    static main(args) {
        console.log("Start testing... \n\n");
        const iterator = new estate_iterator_1.IEstateIterator([
            new apartment_1.Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25),
            new room_1.Room("Dungeon 143", "tra ta ta", 50, 1000, "New"),
            new house_1.House("Velyka 1", "hata olega", 1000, 150000, "Old")
        ], true);
        console.log("Iterate two estates forward:");
        console.log(iterator.next().value);
        console.log(iterator.next().value);
        const savedState = iterator.saveState();
        console.log("Save state:", savedState, "\nMove next");
        console.log(iterator.next().value);
        iterator.restoreState(savedState);
        console.log("Restore state and move next:", iterator.next().value);
        console.log(`End testing... \n\n`);
    }
}
Program.main([]);
