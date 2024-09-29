import { Customer } from "./customer";
import { RealEstate } from "./real_estate";
import { RealtorAbstract } from "./realtor";
import { Room } from "./room";

export class RealtorRoom extends RealtorAbstract {
    public override SellEstate(customer: Customer, estate: RealEstate): void {
        if (estate instanceof Room) {
            console.log(`${this.nameAndSurname} is selling ${estate.constructor.name} to ${customer.nameAndSurname} with price ${estate.priceInUSD}$`);
        } else if (this._realtor !== null) {
            this._realtor.SellEstate(customer, estate);
        }
    }
}