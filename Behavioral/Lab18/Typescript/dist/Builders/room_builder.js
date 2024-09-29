"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBuilder = void 0;
const estate_builder_1 = require("./estate_builder");
const room_1 = require("../Entities/room");
class RoomBuilder extends estate_builder_1.EstateBuilder {
    reset() {
        this._estate = new room_1.Room();
    }
    setNeighbors(goodOrBad = false) {
        const a = this._estate;
        a.isGoodNeighbors = goodOrBad;
        return this;
    }
    setHeatingType(type) {
        const a = this._estate;
        a.heatingType = type;
        return this;
    }
}
exports.RoomBuilder = RoomBuilder;
