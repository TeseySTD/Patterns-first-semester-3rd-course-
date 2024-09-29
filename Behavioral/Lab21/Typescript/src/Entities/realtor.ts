import { Person } from './person';

export class Realtor extends Person {
    public yearsOfWork: number;
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
}