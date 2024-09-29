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
exports.House = void 0;
var real_estate_1 = require("./real_estate");
var realtor_1 = require("./realtor");
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House(address, description, area, price, status) {
        var _this = this;
        if (address && description && area && price && status) {
            _this = _super.call(this, address, description, area, price, status) || this;
        }
        else {
            _this = _super.call(this, "Dungeon", "tra ta ta", 50, 1000, "New") || this;
        }
        return _this;
    }
    House.prototype.toString = function () {
        return "House:\n" + _super.prototype.toString.call(this);
    };
    House.prototype.clone = function () {
        var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? realtor_1.Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    };
    House.prototype.shallowCopy = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    House.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.heatingType = "";
        this.gym = false;
        this.garden = false;
        this.pool = false;
    };
    return House;
}(real_estate_1.RealEstate));
exports.House = House;
