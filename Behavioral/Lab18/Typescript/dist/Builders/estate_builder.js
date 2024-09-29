"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateBuilder = void 0;
class EstateBuilder {
    getEstate() {
        const clone = this._estate.clone();
        this.reset();
        return clone;
    }
    constructor() {
        this.reset();
    }
    makeSellable() {
        this._estate.isSellable = true;
        return this;
    }
    makeBuyable() {
        this._estate.isBuyable = true;
        return this;
    }
    makeRentable() {
        this._estate.isRentable = true;
        return this;
    }
    addRealtor(realtor) {
        this._estate.realtor = realtor;
        return this;
    }
    setStatus(status) {
        this._estate.status = status;
        return this;
    }
    setPrice(price) {
        this._estate.priceInUSD = price;
        return this;
    }
    setArea(area) {
        this._estate.area = area;
        return this;
    }
    setDescription(description) {
        this._estate.description = description;
        return this;
    }
    setAddress(address) {
        this._estate.address = address;
        return this;
    }
    setFurnished() {
        this._estate.furnished = true;
        return this;
    }
    setParking() {
        this._estate.parking = true;
        return this;
    }
    setBalcony() {
        this._estate.balcony = true;
        return this;
    }
    setElevator() {
        this._estate.elevator = true;
        return this;
    }
    setAirConditioning() {
        this._estate.airConditioning = true;
        return this;
    }
    setUtilitiesIncluded() {
        this._estate.isUtilitiesIncluded = true;
        return this;
    }
}
exports.EstateBuilder = EstateBuilder;
