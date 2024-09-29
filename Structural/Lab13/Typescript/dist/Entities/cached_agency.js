"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedAgency = void 0;
var CachedAgency = /** @class */ (function () {
    function CachedAgency(agency) {
        this._cache = {};
        this._agency = agency;
    }
    CachedAgency.prototype.FindEstateByID = function (id) {
        if (this._cache.hasOwnProperty(id)) {
            console.log("Get from cache ".concat(id));
            return this._cache[id];
        }
        else {
            console.log("Get from base ".concat(id));
            var realEstate = this._agency.FindEstateByID(id);
            this._cache[id] = realEstate;
            return realEstate;
        }
    };
    return CachedAgency;
}());
exports.CachedAgency = CachedAgency;
