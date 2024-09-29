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
exports.AugmentedRealityDecorator = void 0;
var real_estate_experience_decorator_1 = require("./real_estate_experience_decorator");
var AugmentedRealityDecorator = /** @class */ (function (_super) {
    __extends(AugmentedRealityDecorator, _super);
    function AugmentedRealityDecorator(realEstate) {
        return _super.call(this, realEstate) || this;
    }
    AugmentedRealityDecorator.prototype.customizeExperience = function () {
        return this._realEstate.customizeExperience() + "\nFeatures augmented reality to visualize furniture and decor.";
    };
    return AugmentedRealityDecorator;
}(real_estate_experience_decorator_1.RealEstateExperienceDecorator));
exports.AugmentedRealityDecorator = AugmentedRealityDecorator;
