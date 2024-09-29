import { Customer } from "../customer";
import { EstateState } from "./estate_state";

export class BuyableState extends EstateState
{
    public rent(customer: Customer, startDate: Date, endDate: Date): void {
        console.log(`Customer ${customer.nameAndSurname} can't rent an estate`);
    }
    public sell(customer: Customer): void {
        console.log(`Customer ${customer.nameAndSurname} can't sell an estate`);
    }
    public setEstateToBuy(customer: Customer, price: number): void {
        if (!this._estate.isAlreadyBought) {
            console.log(`Customer ${customer.nameAndSurname} bought an estate with price (USD) ${price}`);
            this._estate.isAlreadyBought = true;
        } else {
            console.log(`Customer ${customer.nameAndSurname} can't buy an estate because it is already bought`);
        }
    }
}
