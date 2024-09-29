"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateExperienceDecorator = void 0;
var RealEstateExperienceDecorator = /** @class */ (function () {
    function RealEstateExperienceDecorator(realEstate) {
        this._realEstate = realEstate;
    }
    RealEstateExperienceDecorator.prototype.customizeExperience = function () {
        return this._realEstate.customizeExperience();
    };
    return RealEstateExperienceDecorator;
}());
exports.RealEstateExperienceDecorator = RealEstateExperienceDecorator;
