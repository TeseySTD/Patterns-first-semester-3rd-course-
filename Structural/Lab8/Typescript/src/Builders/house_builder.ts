import { EstateBuilder } from './estate_builder';
import { House } from '../Entities/house';

export class HouseBuilder extends EstateBuilder {
    public reset(): void {
        this._estate = new House();
    }

    public setPool(): HouseBuilder {
        const a = this._estate as House;
        a.pool = true;
        return this;
    }

    public setGym(): HouseBuilder {
        const a = this._estate as House;
        a.gym = true;
        return this;
    }
    
    public setGarden(): HouseBuilder {
        const a = this._estate as House;
        a.garden = true;
        return this;
    }

    public setHeatingType(type: string): HouseBuilder {
        const a = this._estate as House;
        a.heatingType = type;
        return this;
    }
}
