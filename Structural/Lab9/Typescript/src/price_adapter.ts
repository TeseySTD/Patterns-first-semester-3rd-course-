import { IBuyable } from './Interfaces/buyable';
import { RealEstate } from './Entities/real_estate';
import { Customer } from './Entities/customer';

export class PriceAdapter implements IBuyable {
    private _estate: RealEstate;

    constructor(estate: RealEstate) {
        this._estate = estate;
    }

    public setEstateToBuy(customer: Customer, price: number): void {
        price = this.convertToUSD(customer.location, price);
        this._estate.setEstateToBuy(customer, price);
    }

    private convertToUSD(location: string, price: number): number {
        switch (location.toLowerCase()) {
            case "usa":
                return price;
            case "ukraine":
                return price / 41.06;
            case "france":
                return price / 841.21;
            case "germany":
                return price / 0.9;
            default:
                return price;
        }
    }
}