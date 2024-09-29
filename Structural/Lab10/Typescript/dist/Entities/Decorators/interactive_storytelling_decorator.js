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
exports.InteractiveStorytellingDecorator = void 0;
var real_estate_experience_decorator_1 = require("./real_estate_experience_decorator");
var InteractiveStorytellingDecorator = /** @class */ (function (_super) {
    __extends(InteractiveStorytellingDecorator, _super);
    function InteractiveStorytellingDecorator(realEstate) {
        return _super.call(this, realEstate) || this;
    }
    InteractiveStorytellingDecorator.prototype.customizeExperience = function () {
        return this._realEstate.customizeExperience() + "\nOffers an interactive storytelling experience that showcases the history and unique aspects of the property.";
    };
    return InteractiveStorytellingDecorator;
}(real_estate_experience_decorator_1.RealEstateExperienceDecorator));
exports.InteractiveStorytellingDecorator = InteractiveStorytellingDecorator;
