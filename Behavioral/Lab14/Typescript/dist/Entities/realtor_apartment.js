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
exports.RealtorApartment = void 0;
var apartment_1 = require("./apartment");
var realtor_1 = require("./realtor");
var RealtorApartment = /** @class */ (function (_super) {
    __extends(RealtorApartment, _super);
    function RealtorApartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RealtorApartment.prototype.SellEstate = function (customer, estate) {
        if (estate instanceof apartment_1.Apartment) {
            console.log("".concat(this.nameAndSurname, " is selling ").concat(estate.constructor.name, " to ").concat(customer.nameAndSurname, " with price ").concat(estate.priceInUSD, "$"));
        }
        else if (this._realtor !== null) {
            this._realtor.SellEstate(customer, estate);
        }
    };
    return RealtorApartment;
}(realtor_1.RealtorAbstract));
exports.RealtorApartment = RealtorApartment;
