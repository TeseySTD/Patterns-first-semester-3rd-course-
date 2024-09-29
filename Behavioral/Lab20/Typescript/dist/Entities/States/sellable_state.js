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
exports.SellableState = void 0;
var estate_state_1 = require("./estate_state");
var SellableState = /** @class */ (function (_super) {
    __extends(SellableState, _super);
    function SellableState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SellableState.prototype.rent = function (customer, startDate, endDate) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't rent an estate"));
    };
    SellableState.prototype.sell = function (customer) {
        if (!this._estate.isAlreadySold) {
            this._estate.isAlreadySold = true;
            console.log("Customer ".concat(customer.nameAndSurname, " sold an estate"));
        }
        else
            console.log("Customer ".concat(customer.nameAndSurname, " can't sell an estate because it is already sold"));
    };
    SellableState.prototype.setEstateToBuy = function (customer, price) {
        console.log("Customer ".concat(customer.nameAndSurname, " can't buy an estate"));
    };
    return SellableState;
}(estate_state_1.EstateState));
exports.SellableState = SellableState;
