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
exports.RealEstate = void 0;
var agency_object_1 = require("./agency_object");
var RealEstate = /** @class */ (function (_super) {
    __extends(RealEstate, _super);
    function RealEstate(address, description, area, price, status) {
        var _this = _super.call(this) || this;
        // Bools
        _this.isRentable = false;
        _this.isSellable = false;
        _this.isBuyable = true;
        _this.furnished = false;
        _this.parking = false;
        _this.balcony = false;
        _this.elevator = false;
        _this.airConditioning = false;
        _this.isUtilitiesIncluded = false;
        _this.address = address;
        _this.description = description;
        _this.area = area;
        _this.priceInUSD = price;
        _this.status = status;
        return _this;
    }
    RealEstate.prototype.toString = function () {
        return "Id: ".concat(this.id, ", Address: ").concat(this.address, ",\nDescription: ").concat(this.description, ",\nArea: ").concat(this.area, ", Price: ").concat(this.priceInUSD, "\nStatus: ").concat(this.status, "\n").concat(this.realtor, "\n") +
            this.intrinsicState == null ? "Furnished: ".concat(this.furnished, ", Parking: ").concat(this.parking, ", Balcony: ").concat(this.balcony, ", Elevator: ").concat(this.elevator, ", Air conditioning: ").concat(this.airConditioning, ", Utilities included: ").concat(this.isUtilitiesIncluded, "\n")
            : this.intrinsicState.toString();
    };
    RealEstate.prototype.printEstateInfo = function (tab) {
        if (tab === void 0) { tab = ""; }
        console.log(tab + this.toString().replace(/\n/g, "\n" + tab));
    };
    RealEstate.printAllInfoAboutEstates = function (realEstates) {
        realEstates.forEach(function (realEstate) {
            console.log(realEstate.toString());
        });
        console.log("\n");
    };
    RealEstate.prototype.reset = function () {
        this.address = "";
        this.description = "";
        this.area = 0;
        this.priceInUSD = 0;
        this.status = "";
        this.realtor = null;
        this.isRentable = false;
        this.isBuyable = false;
        this.isSellable = false;
        this.furnished = false;
        this.parking = false;
        this.balcony = false;
        this.elevator = false;
        this.airConditioning = false;
        this.isUtilitiesIncluded = false;
    };
    return RealEstate;
}(agency_object_1.AgencyObject));
exports.RealEstate = RealEstate;
