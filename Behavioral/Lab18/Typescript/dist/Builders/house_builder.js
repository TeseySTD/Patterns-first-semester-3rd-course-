"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBuilder = void 0;
const estate_builder_1 = require("./estate_builder");
const house_1 = require("../Entities/house");
class HouseBuilder extends estate_builder_1.EstateBuilder {
    reset() {
        this._estate = new house_1.House();
    }
    setPool() {
        const a = this._estate;
        a.pool = true;
        return this;
    }
    setGym() {
        const a = this._estate;
        a.gym = true;
        return this;
    }
    setGarden() {
        const a = this._estate;
        a.garden = true;
        return this;
    }
    setHeatingType(type) {
        const a = this._estate;
        a.heatingType = type;
        return this;
    }
}
exports.HouseBuilder = HouseBuilder;
