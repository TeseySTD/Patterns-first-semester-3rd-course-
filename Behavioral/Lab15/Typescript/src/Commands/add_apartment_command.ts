import { Agency } from "../Entities/agency";
import { Apartment } from "../Entities/apartment";
import { AbstractCommand } from "./abstract_command";

export class AddApartmentCommand extends AbstractCommand {
    constructor(...params: string[]) {
        super(...params);
    }
    public execute(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 0) {
            agency.AddEstate(new Apartment());
            return "Added empty new Apartment";
        } else if (this.Params.length === 6) {
            agency.AddEstate(new Apartment(
                this.Params[0],
                this.Params[1],
                +this.Params[2],
                +this.Params[3],
                this.Params[4],
                +this.Params[5]
            ));
            return "Added new Apartment with args: " + this.Params.join(", ");
        }
        return "Failed to add new Apartment with args: " + this.Params.join(", ");
    }
}
