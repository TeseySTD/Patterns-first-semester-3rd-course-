"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateSubsystem = void 0;
var agency_1 = require("./Entities/agency");
var EstateSubsystem = /** @class */ (function () {
    function EstateSubsystem() {
    }
    EstateSubsystem.prototype.MainAction = function (objects, notify) {
        if (notify === void 0) { notify = true; }
        var sb = "";
        var estates = objects;
        for (var _i = 0, estates_1 = estates; _i < estates_1.length; _i++) {
            var estate = estates_1[_i];
            sb += "Estate ".concat(estate.address, "\n");
        }
        if (notify)
            agency_1.Agency.Notify("realtor");
        console.log(sb);
    };
    return EstateSubsystem;
}());
exports.EstateSubsystem = EstateSubsystem;
