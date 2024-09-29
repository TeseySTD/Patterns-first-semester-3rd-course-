import { Customer } from './customer';
import { Person } from './person';
import { RealEstate } from './real_estate';

export class RealtorAbstract extends Person {
    protected _realtor: RealtorAbstract;

    public yearsOfWork: number;
    constructor(nameAndSurname: string, phone: string, email: string, yearsOfWork: number){
        super(nameAndSurname, phone, email);
        this.yearsOfWork = yearsOfWork;
    }
    public static newRealtorFromObject(realtor: RealtorAbstract): RealtorAbstract {
        let r = new RealtorAbstract(realtor.nameAndSurname, realtor.phone, realtor.email, realtor.yearsOfWork);
        return r;
    }

    public SetNext(realtor: RealtorAbstract): RealtorAbstract {
        this._realtor = realtor;
        return this._realtor;
    }

    public SellEstate(customer: Customer, estate: RealEstate): void {
        console.log(`${this.nameAndSurname} is selling ${estate.constructor.name} to ${customer.nameAndSurname} with price ${estate.priceInUSD}$`);
    }
    public toString(): string {
        return `Realtor:\nId:${this.id}, Name and surname: ${this.nameAndSurname},\nPhone number: ${this.phone}, Email: ${this.email}, Years of work ${this.yearsOfWork}`;
    }
}