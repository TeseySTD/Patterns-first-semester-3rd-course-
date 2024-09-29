"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateContainer = void 0;
var EstateContainer = /** @class */ (function () {
    function EstateContainer() {
        this._realEstateList = [];
    }
    EstateContainer.prototype.add = function (estate) {
        this._realEstateList.push(estate);
    };
    EstateContainer.prototype.remove = function (estate) {
        var index = this._realEstateList.indexOf(estate);
        if (index > -1) {
            this._realEstateList.splice(index, 1);
        }
    };
    EstateContainer.prototype.printEstateInfo = function (tab) {
        if (tab === void 0) { tab = ""; }
        console.log(tab + "Estate list in container " + ":(");
        this._realEstateList.forEach(function (estate) {
            estate.printEstateInfo(tab + tab);
        });
        console.log(tab + ")");
    };
    return EstateContainer;
}());
exports.EstateContainer = EstateContainer;
