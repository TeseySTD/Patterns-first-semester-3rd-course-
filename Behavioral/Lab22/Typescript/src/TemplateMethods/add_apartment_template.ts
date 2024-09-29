import { Agency } from "../Entities/agency";
import { Apartment } from "../Entities/apartment";
import { AbstractTemplate } from "./abstract_template";

export class AddApartmentTemplate extends AbstractTemplate {
    constructor(...params: string[]) {
        super(...params);
    }

    protected override addEmpty(): string {
        const agency = Agency.GetInstance();
        agency.AddEstate(new Apartment());
        return "Added empty new Apartment";
    }

    protected override addEstate(): string {
        const agency = Agency.GetInstance();
        if (this.Params.length === 6) {
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
        else
            return this.returnError();
    }

    protected override returnError(): string {
        return "Failed to add new Apartment with args: " + this.Params.join(", ");
    }
}
