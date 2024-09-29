import { RealEstate } from "../Entities/real_estate";

export interface IEstateVisitor {
    visit(realEstate: RealEstate): void
}