import { RealEstate } from "./Entities/real_estate";

export class EstateSubsystem {
    public estatePortfolio(estates:Array<RealEstate>):string{
        let sb = "";
        for (const estate of estates) {
            sb += `Estate ${estate.address}\n`;
        }

        return sb;
    }
}