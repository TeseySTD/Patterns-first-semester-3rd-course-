import { EstateBuilder } from './estate_builder';
import { Room } from '../Entities/room';

export class RoomBuilder extends EstateBuilder {
    public reset(): void {
        this._estate = new Room();
    }

    public setNeighbors(goodOrBad: boolean = false): RoomBuilder {
        const a = this._estate as Room;
        a.isGoodNeighbors = goodOrBad;
        return this;
    }

    public setHeatingType(type: string): RoomBuilder {
        const a = this._estate as Room;
        a.heatingType = type;
        return this;
    }
}
