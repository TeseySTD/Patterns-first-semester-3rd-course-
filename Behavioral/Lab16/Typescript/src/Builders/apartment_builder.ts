import { EstateBuilder } from './estate_builder';
import { Apartment } from '../Entities/apartment';

export class ApartmentBuilder extends EstateBuilder {
    public reset(): void {
        this._estate = new Apartment();
    }

    public setRoomsNumber(number: number): ApartmentBuilder {
        const a = this._estate as Apartment;
        a.roomsNumber = number;
        return this;
    }

    public setHeatingType(type: string): ApartmentBuilder {
        const a = this._estate as Apartment;
        a.heatingType = type;
        return this;
    }
}
