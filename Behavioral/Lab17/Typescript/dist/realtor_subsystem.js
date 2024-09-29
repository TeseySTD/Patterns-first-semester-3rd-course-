"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtorSubsystem = void 0;
var agency_1 = require("./Entities/agency");
var RealtorSubsystem = /** @class */ (function () {
    function RealtorSubsystem() {
    }
    RealtorSubsystem.prototype.MainAction = function (objects, notify) {
        if (notify === void 0) { notify = true; }
        var sb = [];
        var realtors = objects;
        for (var _i = 0, realtors_1 = realtors; _i < realtors_1.length; _i++) {
            var realtor = realtors_1[_i];
            sb.push("Realtor ".concat(realtor.nameAndSurname, " has ").concat(realtor.RealEstates.length, " estates\n"));
        }
        if (notify)
            agency_1.Agency.Notify("estate");
        console.log(sb.join(""));
    };
    return RealtorSubsystem;
}());
exports.RealtorSubsystem = RealtorSubsystem;
