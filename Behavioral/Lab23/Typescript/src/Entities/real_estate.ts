import { IBuyable } from '../Interfaces/buyable';
import { ISellable } from '../Interfaces/sellable';
import { ICloneable } from '../Interfaces/clonable';
import { IRentable } from '../Interfaces/rentable';
import { IPrintEstateInfo } from '../Interfaces/print_estate_info';
import { AgencyObject } from './agency_object';
import { Customer } from './customer';
import { Realtor } from './realtor';

export abstract class RealEstate extends AgencyObject implements ICloneable, IRentable, IBuyable, ISellable, IPrintEstateInfo {
    public address: string;
    public description: string;
    public area: number;
    public priceInUSD: number;
    public status: string;
    public realtor: Realtor;

    // Bools
    public isRentable: boolean = false;
    public isSellable: boolean = false;
    public isBuyable: boolean = true;
    public furnished: boolean = false;
    public parking: boolean = false;
    public balcony: boolean = false;
    public elevator: boolean = false;
    public airConditioning: boolean = false;
    public isUtilitiesIncluded: boolean = false;

    private _status: string;

    constructor(address: string, description: string, area: number, price: number, status: string) {
        super();
        this.address = address;
        this.description = description;
        this.area = area;
        this.priceInUSD = price;
        this.status = status;
    }

    public toString(): string {
        return `Id: ${this.id}, Address: ${this.address},\nDescription: ${this.description},\nArea: ${this.area}, Price: ${this.priceInUSD}\nStatus: ${this.status}\n${this.realtor}\nFurnished: ${this.furnished}, ` +
            `Parking: ${this.parking}, Balcony: ${this.balcony}, Elevator: ${this.elevator}, Air conditioning: ${this.airConditioning}, Utilities included: ${this.isUtilitiesIncluded}\n`;
    }
    public printEstateInfo(tab: string = ""): void {
        console.log(tab + this.toString().replace(/\n/g, "\n" + tab));
    }

    public abstract rent(customer: Customer, startDate: Date, endDate: Date): void;
    public abstract sell(customer: Customer): void;
    public abstract setEstateToBuy(customer: Customer, price: number): void;
    public abstract clone(): RealEstate;
    public abstract shallowCopy(): RealEstate;

    public static printAllInfoAboutEstates(realEstates: RealEstate[]): void {
        realEstates.forEach(realEstate => {
            console.log(realEstate.toString());
        });
        console.log("\n");
    }

    public reset(): void {
        this.address = "";
        this.description = "";
        this.area = 0;
        this.priceInUSD = 0;
        this.status = "";
        this.realtor = null;
        this.isRentable = false;
        this.isBuyable = false;
        this.isSellable = false;
        this.furnished = false;
        this.parking = false;
        this.balcony = false;
        this.elevator = false;
        this.airConditioning = false;
        this.isUtilitiesIncluded = false;
    }
}