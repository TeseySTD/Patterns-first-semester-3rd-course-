import { ICommand } from "../Interfaces/command";

export abstract class AbstractTemplate {
    protected _params: string[];
    constructor(...args: string[]) {
        this._params = args;
    }

    public get Params(): string[] {
        return this._params;
    }

    public set Params(value: string[]) {
        this._params = value;
    }

    public execute(): string{
        if(this.Params.length === 0)
            return this.addEmpty();
        else
            return this.addEstate();
    }

    protected abstract addEmpty(): string;
    protected abstract addEstate(): string;

    protected returnError(): string {
        return "Failed to add new Estate with args: " + this.Params.join(",");
    }   
}

