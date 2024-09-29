import { EstateBuilder } from "../Builders/estate_builder";
import { RealEstate } from "../Entities/real_estate";

export abstract class EstateDirector {
    protected _estateBuilder: EstateBuilder;

    constructor(estateBuilder: EstateBuilder) {
        this._estateBuilder = estateBuilder;
    }
    public abstract BuildDefault():RealEstate;
}