"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateSubsystem = void 0;
var EstateSubsystem = /** @class */ (function () {
    function EstateSubsystem() {
    }
    EstateSubsystem.prototype.estatePortfolio = function (estates) {
        var sb = "";
        for (var _i = 0, estates_1 = estates; _i < estates_1.length; _i++) {
            var estate = estates_1[_i];
            sb += "Estate ".concat(estate.address, "\n");
        }
        return sb;
    };
    return EstateSubsystem;
}());
exports.EstateSubsystem = EstateSubsystem;
