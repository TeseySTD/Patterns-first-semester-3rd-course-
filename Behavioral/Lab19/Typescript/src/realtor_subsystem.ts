import { AbstractSubsystem } from "./abstract_subsystem";
import { Agency } from "./Entities/agency";
import { AgencyObject } from "./Entities/agency_object";
import { Realtor } from "./Entities/realtor"

export class RealtorSubsystem implements AbstractSubsystem{
    public MainAction(objects:Array<AgencyObject>, notify:boolean = true):void{
        const sb: string[] = [];
        const realtors = objects as Array<Realtor>;
        for (const realtor of realtors) {
            sb.push(`Realtor ${realtor.nameAndSurname} has ${realtor.RealEstates.length} estates\n`);
        }
        if(notify)
            Agency.Notify("estate");
        console.log(sb.join(""));
    }
}