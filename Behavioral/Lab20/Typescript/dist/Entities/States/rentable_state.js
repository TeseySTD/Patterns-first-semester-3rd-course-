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
exports.RentableState = void 0;
var estate_state_1 = require("./estate_state");
var RentableState = /** @class */ (function (_super) {
    __extends(RentableState, _super);
    function RentableState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RentableState.prototype.rent = function (customer, startDate, endDate) {
        if (!this._estate.isAlreadyRented) {
            console.log("Customer ".concat(customer.nameAndSurname, " rented an estate from ").concat(startDate, " to ").concat(endDate));
            this._estate.isAlreadyRented = true;
        }
        else
            console.log("Customer ".concat(customer.nameAndSurname, " can't rent an estate because it is already rented"));
    };
    RentableState.prototype.sell = function (customer) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't sell an estate"));
    };
    RentableState.prototype.setEstateToBuy = function (customer, price) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't buy an estate"));
    };
    return RentableState;
}(estate_state_1.EstateState));
exports.RentableState = RentableState;
