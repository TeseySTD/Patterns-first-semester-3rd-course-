import { IAgency } from "../Interfaces/agency";
import { Agency } from "./agency";
import { RealEstate } from "./real_estate";

export class CachedAgency implements IAgency {
    
    private _agency: Agency;
    private _cache: { [id: number]: RealEstate } = {};
    constructor(agency: Agency) {
        this._agency = agency;
    }

    public FindEstateByID(id: number): RealEstate {
        if (this._cache.hasOwnProperty(id)) {
            console.log(`Get from cache ${id}`);
            return this._cache[id];
        } else {
            console.log(`Get from base ${id}`);
            const realEstate = this._agency.FindEstateByID(id);
            this._cache[id] = realEstate;
            return realEstate;
        }
    }
}