import { Agency } from "../Entities/agency";
import { House } from "../Entities/house";
import { AbstractTemplate } from "./abstract_template";

export class AddHouseStrategy extends AbstractTemplate {
    constructor(...params: string[]) {
        super(...params);
    }

    protected override addEmpty(): string {
        const agency = Agency.GetInstance();
        agency.AddEstate(new House());
        return "Added empty new House";
    }

    protected override addEstate(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 5) {
            agency.AddEstate(new House(
                this.Params[0],
                this.Params[1],
                +this.Params[2],
                +this.Params[3],
                this.Params[4]
            ));
            return "Added new House with args: " + this.Params.join(", ");
        }
        return this.returnError();
    }

    protected override returnError(): string {
        return "Failed to add new House with args: " + this.Params.join(",");
    }
}