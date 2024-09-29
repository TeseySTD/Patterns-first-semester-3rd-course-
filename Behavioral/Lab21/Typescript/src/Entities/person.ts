import { AgencyObject } from './agency_object';

export abstract class Person extends AgencyObject {
    public nameAndSurname: string;
    public phone: string;
    public email: string;
    public location: string = "Ukraine";

    constructor();
    constructor(nameAndSurname: string, phone: string, email: string);
    constructor(nameAndSurname?: string, phone?: string, email?: string) {
        super();
        if (nameAndSurname && phone && email) {
            this.nameAndSurname = nameAndSurname;
            this.phone = phone;
            this.email = email;
        } 
    }

    // protected createDefault():Person {
    //     return new Person("Jane Doe", "8 800 555 35 35", "example@gmail.com");
    // }
}
