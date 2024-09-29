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
exports.CheapEstateDirector = void 0;
var estate_director_1 = require("./estate_director");
var CheapEstateDirector = /** @class */ (function (_super) {
    __extends(CheapEstateDirector, _super);
    function CheapEstateDirector(estateBuilder) {
        return _super.call(this, estateBuilder) || this;
    }
    CheapEstateDirector.prototype.BuildDefault = function () {
        var type = this._estateBuilder.constructor.name.replace("Builder", "").toLowerCase();
        this._estateBuilder.reset();
        this._estateBuilder
            .setAddress("")
            .setDescription("Cheap ".concat(type))
            .setPrice(1000)
            .setStatus("Old")
            .setFurnished()
            .setAirConditioning();
        switch (type) {
            case "house":
                var h = this._estateBuilder;
                return h
                    .setHeatingType("local")
                    .getEstate();
            case "apartment":
                var a = this._estateBuilder;
                return a
                    .setRoomsNumber(1)
                    .setHeatingType("central")
                    .getEstate();
            case "room":
                var r = this._estateBuilder;
                return r
                    .setNeighbors(false)
                    .setHeatingType("central")
                    .getEstate();
            default:
                throw new Error("Wrong type of estate.");
        }
    };
    return CheapEstateDirector;
}(estate_director_1.EstateDirector));
exports.CheapEstateDirector = CheapEstateDirector;
