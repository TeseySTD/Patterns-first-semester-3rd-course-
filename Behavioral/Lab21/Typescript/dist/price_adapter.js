"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAdapter = void 0;
var PriceAdapter = /** @class */ (function () {
    function PriceAdapter(estate) {
        this._estate = estate;
    }
    PriceAdapter.prototype.setEstateToBuy = function (customer, price) {
        price = this.convertToUSD(customer.location, price);
        this._estate.setEstateToBuy(customer, price);
    };
    PriceAdapter.prototype.convertToUSD = function (location, price) {
        switch (location.toLowerCase()) {
            case "usa":
                return price;
            case "ukraine":
                return price / 41.06;
            case "france":
                return price / 841.21;
            case "germany":
                return price / 0.9;
            default:
                return price;
        }
    };
    return PriceAdapter;
}());
exports.PriceAdapter = PriceAdapter;
