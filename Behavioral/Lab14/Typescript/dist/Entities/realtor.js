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
exports.RealtorAbstract = void 0;
var person_1 = require("./person");
var RealtorAbstract = /** @class */ (function (_super) {
    __extends(RealtorAbstract, _super);
    function RealtorAbstract(nameAndSurname, phone, email, yearsOfWork) {
        var _this = _super.call(this, nameAndSurname, phone, email) || this;
        _this.yearsOfWork = yearsOfWork;
        return _this;
    }
    RealtorAbstract.newRealtorFromObject = function (realtor) {
        var r = new RealtorAbstract(realtor.nameAndSurname, realtor.phone, realtor.email, realtor.yearsOfWork);
        return r;
    };
    RealtorAbstract.prototype.SetNext = function (realtor) {
        this._realtor = realtor;
        return this._realtor;
    };
    RealtorAbstract.prototype.SellEstate = function (customer, estate) {
        console.log("".concat(this.nameAndSurname, " is selling ").concat(estate.constructor.name, " to ").concat(customer.nameAndSurname, " with price ").concat(estate.priceInUSD, "$"));
    };
    RealtorAbstract.prototype.toString = function () {
        return "Realtor:\nId:".concat(this.id, ", Name and surname: ").concat(this.nameAndSurname, ",\nPhone number: ").concat(this.phone, ", Email: ").concat(this.email, ", Years of work ").concat(this.yearsOfWork);
    };
    return RealtorAbstract;
}(person_1.Person));
exports.RealtorAbstract = RealtorAbstract;
