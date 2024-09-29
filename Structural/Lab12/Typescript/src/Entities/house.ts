import { RealEstate } from './real_estate';
import { Customer } from './customer';
import { Realtor } from './realtor';
import { RealEstateFlyweight } from './real_state_flyweight';

export class House extends RealEstate {
    public garden: boolean;
    public pool: boolean;
    public gym: boolean;
    public heatingType: string;

    constructor();
    constructor(address: string, description: string, area: number, price: number, status: string);
    constructor(address: string, description: string, area: number, price: number, status: string, intrinsicState: RealEstateFlyweight);
    constructor(address?: string, description?: string, area?: number, price?: number, status?: string, instrinsicState?: RealEstateFlyweight) {
        if (address && description && area && price && status) {
            super(address, description, area, price, status);
            if (instrinsicState) {
                this.intrinsicState = instrinsicState;
            }
        } else {
            super("Dungeon", "tra ta ta", 50, 1000, "New");
        }
    }

    public toString(): string {
        return "House:\n" + super.toString();
    }

    public rent(customer: Customer, startDate: Date, endDate: Date): void {
        if (this.isRentable)
            console.log(`Customer ${customer.nameAndSurname} rented house on address ${this.address} from ${startDate} to ${endDate}.`);
    }

    public sell(customer: Customer): void {
        if (this.isSellable)
            console.log(`Customer ${customer.nameAndSurname} bought house on address ${this.address}.`);
    }

    public setEstateToBuy(customer: Customer, price: number): void {
        if (this.isBuyable) {
            console.log(`Customer ${customer.nameAndSurname} put up for sale house on address ${this.address} with price(USD) ${price}.`);
            this.priceInUSD = price;
            this.isBuyable = false;
        }
    }

    public clone(): House {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    }

    public shallowCopy(): House {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    public reset(): void {
        super.reset();
        this.heatingType = "";
        this.gym = false;
        this.garden = false;
        this.pool = false;
    }
}