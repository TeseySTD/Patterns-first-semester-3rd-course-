"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const estate_iterator_1 = require("./Interfaces/estate_iterator");
const apartment_1 = require("./Entities/apartment");
const room_1 = require("./Entities/room");
const house_1 = require("./Entities/house");
class Program {
    static main(args) {
        console.log("Start testing... \n\n");
        const entities = new estate_iterator_1.IEstateIterator([
            new apartment_1.Apartment("Selo Perebykivtsi", "hata olega", 2000, 200000, "Old", 25),
            new room_1.Room("Dungeon 143", "tra ta ta", 50, 1000, "New"),
            new house_1.House("Velyka 1", "hata olega", 1000, 150000, "Old")
        ]);
        for (const entity of entities) {
            console.log(entity.toString());
        }
        console.log("Change direction.....\n\n\n\n");
        entities.changeDirection(true);
        for (const entity of entities) {
            console.log(entity.toString());
        }
        console.log(`End testing... \n\n`);
    }
}
Program.main([]);
