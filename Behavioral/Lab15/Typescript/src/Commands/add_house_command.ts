import { Agency } from "../Entities/agency";
import { House } from "../Entities/house";
import { AbstractCommand } from "./abstract_command";

export class AddHouseCommand extends AbstractCommand {
    constructor(...params: string[]) {
        super(...params);
    }
    public execute(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 0) {
            agency.AddEstate(new House());
            return "Added empty new House";
        } else if (this.Params.length === 5) {
            agency.AddEstate(new House(
                this.Params[0],
                this.Params[1],
                +this.Params[2],
                +this.Params[3],
                this.Params[4]
            ));
            return "Added new House with args: " + this.Params.join(", ");
        }
        return "Failed to add new House with args: " + this.Params.join(", ");
    }
}