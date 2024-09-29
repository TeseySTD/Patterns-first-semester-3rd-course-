import { IRealEstateExperience } from "../../Interfaces/real_estate_experience";
import { RealEstateExperienceDecorator } from "./real_estate_experience_decorator";

export class InteractiveStorytellingDecorator extends RealEstateExperienceDecorator {

    constructor(realEstate: IRealEstateExperience) {
        super(realEstate);
    }
    public customizeExperience(): String {
        return this._realEstate.customizeExperience() + "\nOffers an interactive storytelling experience that showcases the history and unique aspects of the property.";
    }
}