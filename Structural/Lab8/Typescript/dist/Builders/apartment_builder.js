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
exports.ApartmentBuilder = void 0;
var estate_builder_1 = require("./estate_builder");
var apartment_1 = require("../Entities/apartment");
var ApartmentBuilder = /** @class */ (function (_super) {
    __extends(ApartmentBuilder, _super);
    function ApartmentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApartmentBuilder.prototype.reset = function () {
        this._estate = new apartment_1.Apartment();
    };
    ApartmentBuilder.prototype.setRoomsNumber = function (number) {
        var a = this._estate;
        a.roomsNumber = number;
        return this;
    };
    ApartmentBuilder.prototype.setHeatingType = function (type) {
        var a = this._estate;
        a.heatingType = type;
        return this;
    };
    return ApartmentBuilder;
}(estate_builder_1.EstateBuilder));
exports.ApartmentBuilder = ApartmentBuilder;
