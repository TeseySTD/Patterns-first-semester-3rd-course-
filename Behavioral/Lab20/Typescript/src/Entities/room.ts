import { RealEstate } from './real_estate';
import { Customer } from './customer';
import { Realtor } from './realtor';
export class Room extends RealEstate {
    public heatingType: string;
    public isGoodNeighbors: boolean;
    constructor();
    constructor(address: string, description: string, area: number, price: number, status: string);
    constructor(address?: string, description?: string, area?: number, price?: number, status?: string) {
        if (address && description && area && price && status) {
            super(address, description, area, price, status);
        } else {
            super("Dungeon", "tra ta ta", 50, 1000, "New");
        }
    }

    public toString(): string {
        return "Room:\n" + super.toString();
    }

    public clone(): Room {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        clone.realtor = this.realtor ? Realtor.newRealtorFromObject(this.realtor) : null;
        return clone;
    }

    public shallowCopy(): Room {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    public reset(): void {
        super.reset();
        this.heatingType = "";
    }
}