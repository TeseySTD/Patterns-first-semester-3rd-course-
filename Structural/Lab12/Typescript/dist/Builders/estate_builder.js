"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateBuilder = void 0;
var EstateBuilder = /** @class */ (function () {
    function EstateBuilder() {
        this.reset();
    }
    EstateBuilder.prototype.getEstate = function () {
        var clone = this._estate.clone();
        this.reset();
        return clone;
    };
    EstateBuilder.prototype.makeSellable = function () {
        this._estate.isSellable = true;
        return this;
    };
    EstateBuilder.prototype.makeBuyable = function () {
        this._estate.isBuyable = true;
        return this;
    };
    EstateBuilder.prototype.makeRentable = function () {
        this._estate.isRentable = true;
        return this;
    };
    EstateBuilder.prototype.addRealtor = function (realtor) {
        this._estate.realtor = realtor;
        return this;
    };
    EstateBuilder.prototype.setStatus = function (status) {
        this._estate.status = status;
        return this;
    };
    EstateBuilder.prototype.setPrice = function (price) {
        this._estate.priceInUSD = price;
        return this;
    };
    EstateBuilder.prototype.setArea = function (area) {
        this._estate.area = area;
        return this;
    };
    EstateBuilder.prototype.setDescription = function (description) {
        this._estate.description = description;
        return this;
    };
    EstateBuilder.prototype.setAddress = function (address) {
        this._estate.address = address;
        return this;
    };
    EstateBuilder.prototype.setFurnished = function () {
        this._estate.furnished = true;
        return this;
    };
    EstateBuilder.prototype.setParking = function () {
        this._estate.parking = true;
        return this;
    };
    EstateBuilder.prototype.setBalcony = function () {
        this._estate.balcony = true;
        return this;
    };
    EstateBuilder.prototype.setElevator = function () {
        this._estate.elevator = true;
        return this;
    };
    EstateBuilder.prototype.setAirConditioning = function () {
        this._estate.airConditioning = true;
        return this;
    };
    EstateBuilder.prototype.setUtilitiesIncluded = function () {
        this._estate.isUtilitiesIncluded = true;
        return this;
    };
    return EstateBuilder;
}());
exports.EstateBuilder = EstateBuilder;
