"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstate = void 0;
const agency_object_1 = require("./agency_object");
class RealEstate extends agency_object_1.AgencyObject {
    constructor(address, description, area, price, status) {
        super();
        // Bools
        this.isRentable = false;
        this.isSellable = false;
        this.isBuyable = true;
        this.furnished = false;
        this.parking = false;
        this.balcony = false;
        this.elevator = false;
        this.airConditioning = false;
        this.isUtilitiesIncluded = false;
        this.address = address;
        this.description = description;
        this.area = area;
        this.priceInUSD = price;
        this.status = status;
    }
    toString() {
        return `Id: ${this.id}, Address: ${this.address},\n Description: ${this.description},\nArea: ${this.area}, Price: ${this.priceInUSD}\nStatus: ${this.status}\n${this.realtor}\nFurnished: ${this.furnished}, ` +
            `Parking: ${this.parking}, Balcony: ${this.balcony}, Elevator: ${this.elevator}, Air conditioning: ${this.airConditioning}, Utilities included: ${this.isUtilitiesIncluded}\n`;
    }
    static printAllInfoAboutEstates(realEstates) {
        realEstates.forEach(realEstate => {
            console.log(realEstate.toString());
        });
        console.log("\n");
    }
    reset() {
        this.address = "";
        this.description = "";
        this.area = 0;
        this.priceInUSD = 0;
        this.status = "";
        this.realtor = null;
        this.isRentable = false;
        this.isBuyable = false;
        this.isSellable = false;
        this.furnished = false;
        this.parking = false;
        this.balcony = false;
        this.elevator = false;
        this.airConditioning = false;
        this.isUtilitiesIncluded = false;
    }
}
exports.RealEstate = RealEstate;
