"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuxuryEstateDirector = void 0;
const estate_director_1 = require("./estate_director");
class LuxuryEstateDirector extends estate_director_1.EstateDirector {
    constructor(estateBuilder) {
        super(estateBuilder);
    }
    BuildDefault() {
        const type = this._estateBuilder.constructor.name.replace("Builder", "").toLowerCase();
        this._estateBuilder.reset();
        this._estateBuilder
            .setAddress("")
            .setDescription(`Luxury ${type}`)
            .setPrice(100000)
            .setStatus("New")
            .setFurnished()
            .setAirConditioning();
        switch (type) {
            case "house":
                const h = this._estateBuilder;
                return h
                    .setPool()
                    .setGym()
                    .setGarden()
                    .setHeatingType("local")
                    .getEstate();
            case "apartment":
                const a = this._estateBuilder;
                return a
                    .setRoomsNumber(5)
                    .setHeatingType("central")
                    .setElevator()
                    .setParking()
                    .getEstate();
            case "room":
                const r = this._estateBuilder;
                return r
                    .setNeighbors(true)
                    .setHeatingType("central")
                    .getEstate();
            default:
                throw new Error("Wrong type of estate.");
        }
    }
}
exports.LuxuryEstateDirector = LuxuryEstateDirector;
