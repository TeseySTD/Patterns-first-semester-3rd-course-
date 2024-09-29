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
exports.AddApartmentStrategy = void 0;
var agency_1 = require("../Entities/agency");
var apartment_1 = require("../Entities/apartment");
var abstract_strategy_1 = require("./abstract_strategy");
var AddApartmentStrategy = /** @class */ (function (_super) {
    __extends(AddApartmentStrategy, _super);
    function AddApartmentStrategy() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return _super.apply(this, params) || this;
    }
    AddApartmentStrategy.prototype.execute = function () {
        var agency = agency_1.Agency.GetInstance();
        if (this.Params.length === 0) {
            agency.AddEstate(new apartment_1.Apartment());
            return "Added empty new Apartment";
        }
        else if (this.Params.length === 6) {
            agency.AddEstate(new apartment_1.Apartment(this.Params[0], this.Params[1], +this.Params[2], +this.Params[3], this.Params[4], +this.Params[5]));
            return "Added new Apartment with args: " + this.Params.join(", ");
        }
        return "Failed to add new Apartment with args: " + this.Params.join(", ");
    };
    return AddApartmentStrategy;
}(abstract_strategy_1.AbstractStrategy));
exports.AddApartmentStrategy = AddApartmentStrategy;
