import { Customer } from "../customer";
import { RealEstate } from "../real_estate";
import { EstateState } from "./estate_state";

export class RentableState extends EstateState{
    public rent(customer: Customer, startDate: Date, endDate: Date): void {
        if(!this._estate.isAlreadyRented){
            console.log(`Customer ${customer.nameAndSurname} rented an estate from ${startDate} to ${endDate}`);
            this._estate.isAlreadyRented = true;    
        }
        else
            console.log(`Customer ${customer.nameAndSurname} can't rent an estate because it is already rented`);
    }

    public sell(customer: Customer): void {
        console.log(`Customer ${customer.nameAndSurname} can't sell an estate`);
    }

    public setEstateToBuy(customer: Customer, price: number): void {
        console.log(`Customer ${customer.nameAndSurname} can't buy an estate`);
    }
}

