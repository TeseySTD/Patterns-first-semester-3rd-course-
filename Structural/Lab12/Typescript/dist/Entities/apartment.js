"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
var real_estate_1 = require("./real_estate");
var realtor_1 = require("./realtor");
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment(address, description, area, price, status, roomsNumber, intrinsicState) {
        var _this = this;
        if (address && description && area && price && status && roomsNumber) {
            _this = _super.call(this, address, description, area, price, status) || this;
            if (intrinsicState) {
                _this.intrinsicState = intrinsicState;
            }
            _this.roomsNumber = roomsNumber;
        }
        else {
            _this = _super.call(this, "Dungeon", "tra ta ta", 50, 1000, "New") || this;
            _this.roomsNumber = 3;
        }
        return _this;
    }
    Apartment.prototype.toString = function () {
        return "Apartment:\n" + _super.prototype.toString.call(this) + ", Rooms number: ".concat(this.roomsNumber);
    };
    Apartment.prototype.rent = function (customer, startDate, endDate) {
        if (this.isRentable)
            console.log("Customer ".concat(customer.nameAndSurname, " rented apartment on address ").concat(this.address, " from ").concat(startDate, " to ").concat(endDate, "."));
    };
    Apartment.prototype.sell = function (customer) {
        if (this.isSellable)
            console.log("Customer ".concat(customer.nameAndSurname, " bought apartment on address ").concat(this.address, "."));
    };
    Apartment.prototype.setEstateToBuy = function (customer, price) {
        if (this.isBuyable) {
            console.log("Customer ".concat(customer.nameAndSurname, " put up for sale apartment on address ").concat(this.address, " with price(USD) ").concat(price, "."));
            this.priceInUSD = price;
            this.isBuyable = false;
        }
    };
    Apartment.prototype.clone = function () {
        var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? realtor_1.Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    };
    Apartment.prototype.shallowCopy = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    Apartment.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.roomsNumber = 0;
        this.heatingType = "";
    };
    return Apartment;
}(real_estate_1.RealEstate));
exports.Apartment = Apartment;
