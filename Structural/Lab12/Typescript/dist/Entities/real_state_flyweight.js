"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateFlyweight = void 0;
var RealEstateFlyweight = /** @class */ (function () {
    function RealEstateFlyweight(furnished, parking, balcony, elevator, airConditioning, isUtilitiesIncluded) {
        this.furnished = furnished;
        this.parking = parking;
        this.balcony = balcony;
        this.elevator = elevator;
        this.airConditioning = airConditioning;
        this.isUtilitiesIncluded = isUtilitiesIncluded;
    }
    RealEstateFlyweight.prototype.toString = function () {
        return "Furnished: ".concat(this.furnished, ", Parking: ").concat(this.parking, ", Balcony: ").concat(this.balcony, ", Elevator: ").concat(this.elevator, ", AirConditioning: ").concat(this.airConditioning, ", Utilities included: ").concat(this.isUtilitiesIncluded, "\n");
    };
    return RealEstateFlyweight;
}());
exports.RealEstateFlyweight = RealEstateFlyweight;
