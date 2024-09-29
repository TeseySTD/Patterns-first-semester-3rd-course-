import { IRealEstateExperience } from "../../Interfaces/real_estate_experience";
import { RealEstateExperienceDecorator } from "./real_estate_experience_decorator";

export class AugmentedRealityDecorator extends RealEstateExperienceDecorator {

    constructor(realEstate: IRealEstateExperience) {
        super(realEstate);
    }
    public customizeExperience(): String {
        return this._realEstate.customizeExperience() + "\nFeatures augmented reality to visualize furniture and decor.";
    }
}