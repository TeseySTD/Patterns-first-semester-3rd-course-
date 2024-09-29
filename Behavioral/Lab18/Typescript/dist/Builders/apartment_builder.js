"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentBuilder = void 0;
const estate_builder_1 = require("./estate_builder");
const apartment_1 = require("../Entities/apartment");
class ApartmentBuilder extends estate_builder_1.EstateBuilder {
    reset() {
        this._estate = new apartment_1.Apartment();
    }
    setRoomsNumber(number) {
        const a = this._estate;
        a.roomsNumber = number;
        return this;
    }
    setHeatingType(type) {
        const a = this._estate;
        a.heatingType = type;
        return this;
    }
}
exports.ApartmentBuilder = ApartmentBuilder;
