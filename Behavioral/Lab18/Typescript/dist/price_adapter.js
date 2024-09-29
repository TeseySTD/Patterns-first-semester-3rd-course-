"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAdapter = void 0;
class PriceAdapter {
    constructor(estate) {
        this._estate = estate;
    }
    setEstateToBuy(customer, price) {
        price = this.convertToUSD(customer.location, price);
        this._estate.setEstateToBuy(customer, price);
    }
    convertToUSD(location, price) {
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
    }
}
exports.PriceAdapter = PriceAdapter;
