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
exports.AddHouseCommand = void 0;
var agency_1 = require("../Entities/agency");
var house_1 = require("../Entities/house");
var abstract_command_1 = require("./abstract_command");
var AddHouseCommand = /** @class */ (function (_super) {
    __extends(AddHouseCommand, _super);
    function AddHouseCommand() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return _super.apply(this, params) || this;
    }
    AddHouseCommand.prototype.execute = function () {
        var agency = agency_1.Agency.GetInstance();
        if (this.Params.length === 0) {
            agency.AddEstate(new house_1.House());
            return "Added empty new House";
        }
        else if (this.Params.length === 5) {
            agency.AddEstate(new house_1.House(this.Params[0], this.Params[1], +this.Params[2], +this.Params[3], this.Params[4]));
            return "Added new House with args: " + this.Params.join(", ");
        }
        return "Failed to add new House with args: " + this.Params.join(", ");
    };
    return AddHouseCommand;
}(abstract_command_1.AbstractCommand));
exports.AddHouseCommand = AddHouseCommand;
