import { Customer } from "../customer";
import { RealEstate } from "../real_estate";
import { EstateState } from "./estate_state";

export class SellableState extends EstateState
{
    public override rent(customer: Customer, startDate: Date, endDate: Date): void {
        console.log(`Customer ${customer.nameAndSurname} can't rent an estate`);
    }

    public override sell(customer: Customer): void {
        if(!this._estate.isAlreadySold){
            this._estate.isAlreadySold = true;
            console.log(`Customer ${customer.nameAndSurname} sold an estate`);
        }
        else
            console.log(`Customer ${customer.nameAndSurname} can't sell an estate because it is already sold`);
    }

    public override setEstateToBuy(customer: Customer, price: number): void {
        console.log(`Customer ${customer.nameAndSurname} can't buy an estate`);
    }

}

