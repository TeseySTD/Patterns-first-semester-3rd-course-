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
exports.HouseBuilder = void 0;
var estate_builder_1 = require("./estate_builder");
var house_1 = require("../Entities/house");
var HouseBuilder = /** @class */ (function (_super) {
    __extends(HouseBuilder, _super);
    function HouseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HouseBuilder.prototype.reset = function () {
        this._estate = new house_1.House();
    };
    HouseBuilder.prototype.setPool = function () {
        var a = this._estate;
        a.pool = true;
        return this;
    };
    HouseBuilder.prototype.setGym = function () {
        var a = this._estate;
        a.gym = true;
        return this;
    };
    HouseBuilder.prototype.setGarden = function () {
        var a = this._estate;
        a.garden = true;
        return this;
    };
    HouseBuilder.prototype.setHeatingType = function (type) {
        var a = this._estate;
        a.heatingType = type;
        return this;
    };
    return HouseBuilder;
}(estate_builder_1.EstateBuilder));
exports.HouseBuilder = HouseBuilder;
