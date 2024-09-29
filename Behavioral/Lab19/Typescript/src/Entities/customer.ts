import { IBuyable } from '../Interfaces/buyable';
import { Person } from './person';

export class Customer extends Person {
    constructor(nameAndSurname: string, phone: string, email: string);
    constructor();
    constructor(nameAndSurname?: string, phone?: string, email?: string) {
        if (nameAndSurname && phone && email) {
            super(nameAndSurname, phone, email);
        } else {
            super();
        }
    }

    public setToBuy(buyable: IBuyable, price: number): void {
        buyable.setEstateToBuy(this, price);
    }

    public notify(message: string): void {
        console.log(`${this.nameAndSurname} was notified about ${message}`);
    }
}