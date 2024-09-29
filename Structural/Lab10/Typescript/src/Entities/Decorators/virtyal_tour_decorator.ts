import { IRealEstateExperience } from "../../Interfaces/real_estate_experience";
import { RealEstateExperienceDecorator } from "./real_estate_experience_decorator";

export class VirtualTourDecorator extends RealEstateExperienceDecorator {

    constructor(realEstate: IRealEstateExperience) {
        super(realEstate);
    }
    public customizeExperience(): String {
        return this._realEstate.customizeExperience() + "\nIncludes a 3D virtual tour of the property.";
    }
}