"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheapEstateDirector = void 0;
const estate_director_1 = require("./estate_director");
class CheapEstateDirector extends estate_director_1.EstateDirector {
    constructor(estateBuilder) {
        super(estateBuilder);
    }
    BuildDefault() {
        const type = this._estateBuilder.constructor.name.replace("Builder", "").toLowerCase();
        this._estateBuilder.reset();
        this._estateBuilder
            .setAddress("")
            .setDescription(`Cheap ${type}`)
            .setPrice(1000)
            .setStatus("Old")
            .setFurnished()
            .setAirConditioning();
        switch (type) {
            case "house":
                const h = this._estateBuilder;
                return h
                    .setHeatingType("local")
                    .getEstate();
            case "apartment":
                const a = this._estateBuilder;
                return a
                    .setRoomsNumber(1)
                    .setHeatingType("central")
                    .getEstate();
            case "room":
                const r = this._estateBuilder;
                return r
                    .setNeighbors(false)
                    .setHeatingType("central")
                    .getEstate();
            default:
                throw new Error("Wrong type of estate.");
        }
    }
}
exports.CheapEstateDirector = CheapEstateDirector;
