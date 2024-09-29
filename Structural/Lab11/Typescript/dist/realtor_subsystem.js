"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtorSubsystem = void 0;
var RealtorSubsystem = /** @class */ (function () {
    function RealtorSubsystem() {
    }
    RealtorSubsystem.prototype.realtorsPortfolio = function (realtors) {
        var sb = [];
        for (var _i = 0, realtors_1 = realtors; _i < realtors_1.length; _i++) {
            var realtor = realtors_1[_i];
            sb.push("Realtor ".concat(realtor.nameAndSurname, " has ").concat(realtor.RealEstates.length, " estates\n"));
        }
        return sb.join("");
    };
    return RealtorSubsystem;
}());
exports.RealtorSubsystem = RealtorSubsystem;
