import { Customer } from './customer';
import { Person } from './person';
import { RealEstate } from './real_estate';

export class Realtor extends Person {
    public yearsOfWork: number;
    public RealEstates: Array<RealEstate> = [];
    public Customers: Array<Customer> = [];

    constructor(nameAndSurname: string, phone: string, email: string, yearsOfWork: number){
        super(nameAndSurname, phone, email);
        this.yearsOfWork = yearsOfWork;
    }
    public static newRealtorFromObject(realtor: Realtor): Realtor {
        let r = new Realtor(realtor.nameAndSurname, realtor.phone, realtor.email, realtor.yearsOfWork);
        return r;
    }

    public toString(): string {
        return `Realtor:\nId:${this.id}, Name and surname: ${this.nameAndSurname},\nPhone number: ${this.phone}, Email: ${this.email}, Years of work ${this.yearsOfWork}`;
    }

    public NotifyCustomers(): void {
        console.log(`Realtor ${this.nameAndSurname} notified about cheap estate`);
        const cheapEstate = this.RealEstates.sort((a, b) => a.priceInUSD - b.priceInUSD)[0];
        this.Customers.forEach((customer) => {
            customer.notify(`Cheap estate on address ${cheapEstate.address}`);
        });
    }

}