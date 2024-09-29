import { ICommand } from "../Interfaces/command";

export abstract class AbstractCommand implements ICommand {
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

    public abstract execute(): string;
}

