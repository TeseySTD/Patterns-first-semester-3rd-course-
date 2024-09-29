"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const real_estate_1 = require("./real_estate");
const realtor_1 = require("./realtor");
class House extends real_estate_1.RealEstate {
    constructor(address, description, area, price, status) {
        if (address && description && area && price && status) {
            super(address, description, area, price, status);
        }
        else {
            super("Dungeon", "tra ta ta", 50, 1000, "New");
        }
    }
    toString() {
        return "House:\n" + super.toString();
    }
    rent(customer, startDate, endDate) {
        if (this.isRentable)
            console.log(`Customer ${customer.nameAndSurname} rented house on address ${this.address} from ${startDate} to ${endDate}.`);
    }
    sell(customer) {
        if (this.isSellable)
            console.log(`Customer ${customer.nameAndSurname} bought house on address ${this.address}.`);
    }
    setEstateToBuy(customer, price) {
        if (this.isBuyable) {
            console.log(`Customer ${customer.nameAndSurname} put up for sale house on address ${this.address} with price(USD) ${price}.`);
            this.priceInUSD = price;
            this.isBuyable = false;
        }
    }
    clone() {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? realtor_1.Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    }
    shallowCopy() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
    reset() {
        super.reset();
        this.heatingType = "";
        this.gym = false;
        this.garden = false;
        this.pool = false;
    }
}
exports.House = House;
