export abstract class AgencyObject {
    private static _maxId = 0;
    public id: number;

    constructor() {
        this.id = AgencyObject._maxId;
        AgencyObject._maxId += 1;
    }
}