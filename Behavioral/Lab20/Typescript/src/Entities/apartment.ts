import { RealEstate } from './real_estate';
import { Customer } from './customer';
import { Realtor } from './realtor';
export class Apartment extends RealEstate {
    public roomsNumber: number;
    public heatingType: string;

    constructor();
    constructor(address: string, description: string, area: number, price: number, status: string, roomsNumber: number);
    constructor(address?: string, description?: string, area?: number, price?: number, status?: string, roomsNumber?: number) {
        if (address && description && area && price && status && roomsNumber) {
            super(address, description, area, price, status);
            this.roomsNumber = roomsNumber;
        } else {
            super("Dungeon", "tra ta ta", 50, 1000, "New");
            this.roomsNumber = 3;
        }
    }

    public toString(): string {
        return "Apartment:\n" + super.toString() + `, Rooms number: ${this.roomsNumber}`;
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
