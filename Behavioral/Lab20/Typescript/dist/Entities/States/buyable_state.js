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
exports.BuyableState = void 0;
var estate_state_1 = require("./estate_state");
var BuyableState = /** @class */ (function (_super) {
    __extends(BuyableState, _super);
    function BuyableState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuyableState.prototype.rent = function (customer, startDate, endDate) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't rent an estate"));
    };
    BuyableState.prototype.sell = function (customer) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't sell an estate"));
    };
    BuyableState.prototype.setEstateToBuy = function (customer, price) {
        if (!this._estate.isAlreadyBought) {
            console.log("Customer ".concat(customer.nameAndSurname, " bought an estate with price (USD) ").concat(price));
            this._estate.isAlreadyBought = true;
        }
        else {
            console.log("Customer ".concat(customer.nameAndSurname, " can't buy an estate because it is already bought"));
        }
    };
    return BuyableState;
}(estate_state_1.EstateState));
exports.BuyableState = BuyableState;
