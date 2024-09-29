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
exports.Realtor = void 0;
var person_1 = require("./person");
var Realtor = /** @class */ (function (_super) {
    __extends(Realtor, _super);
    function Realtor(nameAndSurname, phone, email, yearsOfWork) {
        var _this = _super.call(this, nameAndSurname, phone, email) || this;
        _this.RealEstates = [];
        _this.Customers = [];
        _this.yearsOfWork = yearsOfWork;
        return _this;
    }
    Realtor.newRealtorFromObject = function (realtor) {
        var r = new Realtor(realtor.nameAndSurname, realtor.phone, realtor.email, realtor.yearsOfWork);
        return r;
    };
    Realtor.prototype.toString = function () {
        return "Realtor:\nId:".concat(this.id, ", Name and surname: ").concat(this.nameAndSurname, ",\nPhone number: ").concat(this.phone, ", Email: ").concat(this.email, ", Years of work ").concat(this.yearsOfWork);
    };
    Realtor.prototype.NotifyCustomers = function () {
        console.log("Realtor ".concat(this.nameAndSurname, " notified about cheap estate"));
        var cheapEstate = this.RealEstates.sort(function (a, b) { return a.priceInUSD - b.priceInUSD; })[0];
        this.Customers.forEach(function (customer) {
            customer.notify("Cheap estate on address ".concat(cheapEstate.address));
        });
    };
    return Realtor;
}(person_1.Person));
exports.Realtor = Realtor;
