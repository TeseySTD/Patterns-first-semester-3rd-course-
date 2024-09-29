import { Agency } from "../Entities/agency";
import { AbstractCommand } from "./abstract_command";

export class RemoveEstateCommand extends AbstractCommand {
    constructor(...params: string[]) {
        super(...params);
    }

    public override execute(): string {
        const agency = Agency.GetInstance();
        const types = ["apartment", "house", "room"] as const;
        let id: number;
        if (this._params.length === 2) {
            if (!types.includes((this._params[0].toLowerCase() as "apartment" | "house" | "room"))) {
                return `Failed to remove estate with args: Wrong first parameter: type of estate`;
            } else if (isNaN(id = +this._params[1])) {
                return `Failed to remove estate with args: Wrong second parameter: id of estate isn't positive integer`;
            }
            try {
                agency.RemoveEstateByIndex(this._params[0], id);
                return `Removed estate with args: ${this._params.join(", ")}`;
            } catch (e) {
                return `Failed to remove estate with args: ${e.message}`;
            }
        }
        return "Failed to remove estate with args: Uncorrected length of args";
    }
}
