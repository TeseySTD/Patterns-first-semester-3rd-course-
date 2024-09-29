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
exports.Customer = void 0;
var person_1 = require("./person");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(nameAndSurname, phone, email) {
        var _this = this;
        if (nameAndSurname && phone && email) {
            _this = _super.call(this, nameAndSurname, phone, email) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        return _this;
    }
    Customer.prototype.setToBuy = function (buyable, price) {
        buyable.setEstateToBuy(this, price);
    };
    Customer.prototype.notify = function (message) {
        console.log("".concat(this.nameAndSurname, " was notified about ").concat(message));
    };
    return Customer;
}(person_1.Person));
exports.Customer = Customer;
