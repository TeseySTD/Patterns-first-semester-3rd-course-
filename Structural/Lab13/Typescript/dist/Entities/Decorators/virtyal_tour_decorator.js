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
exports.VirtualTourDecorator = void 0;
var real_estate_experience_decorator_1 = require("./real_estate_experience_decorator");
var VirtualTourDecorator = /** @class */ (function (_super) {
    __extends(VirtualTourDecorator, _super);
    function VirtualTourDecorator(realEstate) {
        return _super.call(this, realEstate) || this;
    }
    VirtualTourDecorator.prototype.customizeExperience = function () {
        return this._realEstate.customizeExperience() + "\nIncludes a 3D virtual tour of the property.";
    };
    return VirtualTourDecorator;
}(real_estate_experience_decorator_1.RealEstateExperienceDecorator));
exports.VirtualTourDecorator = VirtualTourDecorator;
