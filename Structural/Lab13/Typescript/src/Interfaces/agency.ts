import { RealEstate } from "../Entities/real_estate";

export interface IAgency {
    FindEstateByID(id: number):RealEstate;
}