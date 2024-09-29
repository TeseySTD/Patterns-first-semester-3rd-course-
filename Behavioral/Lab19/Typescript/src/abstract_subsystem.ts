import { AgencyObject } from "./Entities/agency_object";

export interface AbstractSubsystem{
    MainAction(objects:Array<AgencyObject>, notify:boolean):void;
}