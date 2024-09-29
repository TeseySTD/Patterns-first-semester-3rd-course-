import { RealEstate } from './real_estate';
import { Customer } from './customer';
import { Realtor } from './realtor';
import { RealEstateFlyweight } from './real_state_flyweight';
export class Apartment extends RealEstate {
    public roomsNumber: number;
    public heatingType: string;

    constructor();
    constructor(address: string, description: string, area: number, price: number, status: string, roomsNumber: number);
    constructor(address: string, description: string, area: number, price: number, status: string, roomsNumber: number, intrinsicState: RealEstateFlyweight);
    constructor(address?: string, description?: string, area?: number, price?: number, status?: string, roomsNumber?: number, intrinsicState?: RealEstateFlyweight)
    {
        if (address && description && area && price && status && roomsNumber) {
            super(address, description, area, price, status);
            if(intrinsicState){
                this.intrinsicState = intrinsicState;
            }
            this.roomsNumber = roomsNumber;
        } else {
            super("Dungeon", "tra ta ta", 50, 1000, "New");
            this.roomsNumber = 3;
        }
    }

    public toString(): string {
        return "Apartment:\n" + super.toString() + `, Rooms number: ${this.roomsNumber}`;
    }

    public rent(customer: Customer, startDate: Date, endDate: Date): void {
        if (this.isRentable)
            console.log(`Customer ${customer.nameAndSurname} rented apartment on address ${this.address} from ${startDate} to ${endDate}.`);
    }

    public sell(customer: Customer): void {
        if (this.isSellable)
            console.log(`Customer ${customer.nameAndSurname} bought apartment on address ${this.address}.`);
    }

    public setEstateToBuy(customer: Customer, price: number): void {
        if (this.isBuyable) {
            console.log(`Customer ${customer.nameAndSurname} put up for sale apartment on address ${this.address} with price(USD) ${price}.`);
            this.priceInUSD = price;
            this.isBuyable = false;
        }
    }

    public clone(): Apartment {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    }

    public shallowCopy(): Apartment {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    public reset(): void {
        super.reset();
        this.roomsNumber = 0;
        this.heatingType = "";
    }
}
