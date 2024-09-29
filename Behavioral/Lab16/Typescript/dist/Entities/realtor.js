"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Realtor = void 0;
const person_1 = require("./person");
class Realtor extends person_1.Person {
    constructor(nameAndSurname, phone, email, yearsOfWork) {
        super(nameAndSurname, phone, email);
        this.yearsOfWork = yearsOfWork;
    }
    static newRealtorFromObject(realtor) {
        let r = new Realtor(realtor.nameAndSurname, realtor.phone, realtor.email, realtor.yearsOfWork);
        return r;
    }
    toString() {
        return `Realtor:\nId:${this.id}, Name and surname: ${this.nameAndSurname},\nPhone number: ${this.phone}, Email: ${this.email}, Years of work ${this.yearsOfWork}`;
    }
}
exports.Realtor = Realtor;
