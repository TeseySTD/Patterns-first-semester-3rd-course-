import { IPrintEstateInfo } from '../Interfaces/print_estate_info';

export class EstateContainer implements IPrintEstateInfo {
    protected _realEstateList: IPrintEstateInfo[] = [];

    public add(estate: IPrintEstateInfo): void {
        this._realEstateList.push(estate);
    }

    public remove(estate: IPrintEstateInfo): void {
        const index = this._realEstateList.indexOf(estate);
        if (index > -1) {
            this._realEstateList.splice(index, 1);
        }
    }

    public printEstateInfo(tab: string = ""): void {
        console.log(tab + "Estate list in container " + ":(");
        this._realEstateList.forEach(estate => {
            estate.printEstateInfo(tab + tab);
        });
        console.log(tab + ")");
    }

}
