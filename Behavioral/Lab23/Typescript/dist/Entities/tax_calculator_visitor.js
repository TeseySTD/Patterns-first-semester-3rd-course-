"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCalculatorVisitor = void 0;
var apartment_1 = require("./apartment");
var house_1 = require("./house");
var TaxCalculatorVisitor = /** @class */ (function () {
    function TaxCalculatorVisitor() {
    }
    TaxCalculatorVisitor.prototype.visit = function (estate) {
        var className = estate instanceof house_1.House ? "House" : estate instanceof apartment_1.Apartment ? "Apartment" : "Room";
        switch (className) {
            case ("House"):
                this.visitHouse(estate);
                break;
            case ("Apartment"):
                this.visitApartment(estate);
                break;
            case ("Room"):
                this.visitRoom(estate);
                break;
            default:
                throw new Error("Unknown RealEstate type");
        }
    };
    TaxCalculatorVisitor.prototype.visitHouse = function (house) {
        var tax = house.area * 1.5;
        console.log("House at ".concat(house.address, ": Tax is ").concat(tax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })));
    };
    TaxCalculatorVisitor.prototype.visitApartment = function (apartment) {
        var tax = apartment.area * 1.2;
        console.log("Apartment at ".concat(apartment.address, ": Tax is ").concat(tax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })));
    };
    TaxCalculatorVisitor.prototype.visitRoom = function (room) {
        var tax = room.area * 0.8;
        console.log("Room at ".concat(room.address, ": Tax is ").concat(tax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })));
    };
    return TaxCalculatorVisitor;
}());
exports.TaxCalculatorVisitor = TaxCalculatorVisitor;
