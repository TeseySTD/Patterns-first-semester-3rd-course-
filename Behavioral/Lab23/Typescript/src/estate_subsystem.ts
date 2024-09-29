import { AbstractSubsystem } from "./abstract_subsystem";
import { Agency } from "./Entities/agency";
import { AgencyObject } from "./Entities/agency_object";
import { RealEstate } from "./Entities/real_estate";

export class EstateSubsystem implements AbstractSubsystem {
    public MainAction(objects:Array<AgencyObject>, notify:boolean = true):void{
        let sb = "";
        const estates = objects as Array<RealEstate>;
        for (const estate of estates) {
            sb += `Estate ${estate.address}\n`;
        }
        if(notify)
            Agency.Notify("realtor");
        console.log(sb);
    }
}