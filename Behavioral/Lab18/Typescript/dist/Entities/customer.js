"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const person_1 = require("./person");
class Customer extends person_1.Person {
    constructor(nameAndSurname, phone, email) {
        if (nameAndSurname && phone && email) {
            super(nameAndSurname, phone, email);
        }
        else {
            super();
        }
    }
    setToBuy(buyable, price) {
        buyable.setEstateToBuy(this, price);
    }
}
exports.Customer = Customer;
