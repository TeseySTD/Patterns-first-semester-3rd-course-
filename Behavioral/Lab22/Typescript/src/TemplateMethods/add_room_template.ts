import { Agency } from "../Entities/agency";
import { Apartment } from "../Entities/apartment";
import { Room } from "../Entities/room";
import { ICommand } from "../Interfaces/command";
import { AbstractTemplate } from "./abstract_template";

export class AddRoomStrategy extends AbstractTemplate {
    constructor(...params: string[]) {
        super(...params);
    }
    protected override addEmpty(): string {
        const agency = Agency.GetInstance();
        agency.AddEstate(new Room());
        return "Added empty new Room";
    }

    protected override addEstate(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 5) {
            agency.AddEstate(new Room(
                this.Params[0],
                this.Params[1],
                +this.Params[2],
                +this.Params[3],
                this.Params[4]
            ));
            return "Added new Room with args: " + this.Params.join(", ");
        }
        return this.returnError();
    }
}