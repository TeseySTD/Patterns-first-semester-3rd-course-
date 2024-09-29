import { IBuyable, } from "../../Interfaces/buyable";
import { IRentable } from "../../Interfaces/rentable";
import { ISellable } from "../../Interfaces/sellable";
import { Customer } from "../customer";
import { RealEstate } from "../real_estate";

export abstract class EstateState implements IBuyable, ISellable, IRentable
{
    protected _estate: RealEstate;
    constructor(estate: RealEstate)
    {
        this._estate = estate;
    }
    public abstract rent(customer: Customer, startDate: Date, endDate: Date): void;

    public abstract sell(customer: Customer): void;

    public abstract setEstateToBuy(customer: Customer, price: number): void;

}



