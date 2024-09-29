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
exports.Room = void 0;
var real_estate_1 = require("./real_estate");
var realtor_1 = require("./realtor");
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room(address, description, area, price, status, intrinsicState) {
        var _this = this;
        if (address && description && area && price && status) {
            _this = _super.call(this, address, description, area, price, status) || this;
            if (intrinsicState) {
                _this.intrinsicState = intrinsicState;
            }
        }
        else {
            _this = _super.call(this, "Dungeon", "tra ta ta", 50, 1000, "New") || this;
        }
        return _this;
    }
    Room.prototype.toString = function () {
        return "Room:\n" + _super.prototype.toString.call(this);
    };
    Room.prototype.rent = function (customer, startDate, endDate) {
        if (this.isRentable)
            console.log("Customer ".concat(customer.nameAndSurname, " rented room on address ").concat(this.address, " from ").concat(startDate, " to ").concat(endDate, "."));
    };
    Room.prototype.sell = function (customer) {
        if (this.isSellable)
            console.log("Customer ".concat(customer.nameAndSurname, " bought room on address ").concat(this.address, "."));
    };
    Room.prototype.setEstateToBuy = function (customer, price) {
        if (this.isBuyable) {
            console.log("Customer ".concat(customer.nameAndSurname, " put up for sale room on address ").concat(this.address, " with price(USD) ").concat(price, "."));
            this.priceInUSD = price;
            this.isBuyable = false;
        }
    };
    Room.prototype.clone = function () {
        var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? realtor_1.Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    };
    Room.prototype.shallowCopy = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    Room.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.heatingType = "";
    };
    return Room;
}(real_estate_1.RealEstate));
exports.Room = Room;
