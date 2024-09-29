"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const agency_object_1 = require("./agency_object");
class Person extends agency_object_1.AgencyObject {
    constructor(nameAndSurname, phone, email) {
        super();
        this.location = "Ukraine";
        if (nameAndSurname && phone && email) {
            this.nameAndSurname = nameAndSurname;
            this.phone = phone;
            this.email = email;
        }
    }
}
exports.Person = Person;
