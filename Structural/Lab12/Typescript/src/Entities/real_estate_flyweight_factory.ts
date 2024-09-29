import { RealEstateFlyweight } from "./real_state_flyweight";

export class RealEstateFlyweightFactory {
    private flyweights: { [key: string]: RealEstateFlyweight } = {};

    constructor(...args: RealEstateFlyweight[]) {
        args.forEach(elem => {
            this.flyweights[this.getKey(elem)] = elem;
        });
    }

    private getKey(key: RealEstateFlyweight): string {
        const elements = [
            key.furnished.toString(),
            key.parking.toString(),
            key.balcony.toString(),
            key.elevator.toString(),
            key.airConditioning.toString(),
            key.isUtilitiesIncluded.toString()
        ];

        return elements.join('_');
    }

    public getFlyweight(sharedState: RealEstateFlyweight): RealEstateFlyweight {
        const key = this.getKey(sharedState);

        if (!this.flyweights.hasOwnProperty(key)) {
            console.log('RealEstateFlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = sharedState;
        } else {
            console.log('FRealEstateFlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    }


}


