"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyObject = void 0;
class AgencyObject {
    constructor() {
        this.id = AgencyObject._maxId;
        AgencyObject._maxId += 1;
    }
}
exports.AgencyObject = AgencyObject;
AgencyObject._maxId = 0;
