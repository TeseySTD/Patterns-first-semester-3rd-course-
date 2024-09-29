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
exports.RemoveEstateCommand = void 0;
var agency_1 = require("../Entities/agency");
var abstract_command_1 = require("./abstract_command");
var RemoveEstateCommand = /** @class */ (function (_super) {
    __extends(RemoveEstateCommand, _super);
    function RemoveEstateCommand() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return _super.apply(this, params) || this;
    }
    RemoveEstateCommand.prototype.execute = function () {
        var agency = agency_1.Agency.GetInstance();
        var types = ["apartment", "house", "room"];
        var id;
        if (this._params.length === 2) {
            if (!types.includes(this._params[0].toLowerCase())) {
                return "Failed to remove estate with args: Wrong first parameter: type of estate";
            }
            else if (isNaN(id = +this._params[1])) {
                return "Failed to remove estate with args: Wrong second parameter: id of estate isn't positive integer";
            }
            try {
                agency.RemoveEstateByIndex(this._params[0], id);
                return "Removed estate with args: ".concat(this._params.join(", "));
            }
            catch (e) {
                return "Failed to remove estate with args: ".concat(e.message);
            }
        }
        return "Failed to remove estate with args: Uncorrected length of args";
    };
    return RemoveEstateCommand;
}(abstract_command_1.AbstractCommand));
exports.RemoveEstateCommand = RemoveEstateCommand;
