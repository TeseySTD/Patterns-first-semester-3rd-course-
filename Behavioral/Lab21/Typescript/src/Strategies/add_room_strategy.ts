import { Agency } from "../Entities/agency";
import { Apartment } from "../Entities/apartment";
import { Room } from "../Entities/room";
import { ICommand } from "../Interfaces/command";
import { AbstractStrategy } from "./abstract_strategy";

export class AddRoomStrategy extends AbstractStrategy {
    constructor(...params: string[]) {
        super(...params);
    }
    public execute(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 0) {
            agency.AddEstate(new Apartment());
            return "Added empty new Room";
        } else if (this.Params.length === 5) {
            agency.AddEstate(new Room(
                this.Params[0],
                this.Params[1],
                +this.Params[2],
                +this.Params[3],
                this.Params[4]
            ));
            return "Added new Room with args: " + this.Params.join(", ");
        }
        return "Failed to add new Room with args: " + this.Params.join(", ");
    }
}