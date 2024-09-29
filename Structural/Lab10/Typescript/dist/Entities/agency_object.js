"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyObject = void 0;
var AgencyObject = /** @class */ (function () {
    function AgencyObject() {
        this.id = AgencyObject._maxId;
        AgencyObject._maxId += 1;
    }
    AgencyObject._maxId = 0;
    return AgencyObject;
}());
exports.AgencyObject = AgencyObject;
