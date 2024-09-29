import { RealEstate } from '../Entities/real_estate';
import { Realtor } from '../Entities/realtor';

export abstract class EstateBuilder {
    protected _estate: RealEstate;

    public abstract reset(): void;

    public getEstate(): RealEstate {
        const clone = this._estate.clone();
        this.reset();
        return clone;
    }

    constructor() {
        this.reset();
    }

    public makeSellable(): EstateBuilder {
        this._estate.isSellable = true;
        return this;
    }

    public makeBuyable(): EstateBuilder {
        this._estate.isBuyable = true;
        return this;
    }

    public makeRentable(): EstateBuilder {
        this._estate.isRentable = true;
        return this;
    }

    public addRealtor(realtor: Realtor): EstateBuilder {
        this._estate.realtor = realtor;
        return this;
    }

    public setStatus(status: string): EstateBuilder {
        this._estate.status = status;
        return this;
    }

    public setPrice(price: number): EstateBuilder {
        this._estate.priceInUSD = price;
        return this;
    }

    public setArea(area: number): EstateBuilder {
        this._estate.area = area;
        return this;
    }

    public setDescription(description: string): EstateBuilder {
        this._estate.description = description;
        return this;
    }

    public setAddress(address: string): EstateBuilder {
        this._estate.address = address;
        return this;
    }

    public setFurnished(): EstateBuilder {
        this._estate.furnished = true;
        return this;
    }

    public setParking(): EstateBuilder {
        this._estate.parking = true;
        return this;
    }

    public setBalcony(): EstateBuilder {
        this._estate.balcony = true;
        return this;
    }

    public setElevator(): EstateBuilder {
        this._estate.elevator = true;
        return this;
    }

    public setAirConditioning(): EstateBuilder {
        this._estate.airConditioning = true;
        return this;
    }

    public setUtilitiesIncluded(): EstateBuilder {
        this._estate.isUtilitiesIncluded = true;
        return this;
    }
}