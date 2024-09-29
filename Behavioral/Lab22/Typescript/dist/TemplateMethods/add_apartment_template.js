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
exports.AddApartmentTemplate = void 0;
var agency_1 = require("../Entities/agency");
var apartment_1 = require("../Entities/apartment");
var abstract_template_1 = require("./abstract_template");
var AddApartmentTemplate = /** @class */ (function (_super) {
    __extends(AddApartmentTemplate, _super);
    function AddApartmentTemplate() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return _super.apply(this, params) || this;
    }
    AddApartmentTemplate.prototype.addEmpty = function () {
        var agency = agency_1.Agency.GetInstance();
        agency.AddEstate(new apartment_1.Apartment());
        return "Added empty new Apartment";
    };
    AddApartmentTemplate.prototype.addEstate = function () {
        var agency = agency_1.Agency.GetInstance();
        if (this.Params.length === 6) {
            agency.AddEstate(new apartment_1.Apartment(this.Params[0], this.Params[1], +this.Params[2], +this.Params[3], this.Params[4], +this.Params[5]));
            return "Added new Apartment with args: " + this.Params.join(", ");
        }
        else
            return this.returnError();
    };
    AddApartmentTemplate.prototype.returnError = function () {
        return "Failed to add new Apartment with args: " + this.Params.join(", ");
    };
    return AddApartmentTemplate;
}(abstract_template_1.AbstractTemplate));
exports.AddApartmentTemplate = AddApartmentTemplate;
