import { IRealEstateExperience } from "../../Interfaces/real_estate_experience";

export abstract class RealEstateExperienceDecorator implements IRealEstateExperience {
    protected _realEstate: IRealEstateExperience;
    constructor(realEstate: IRealEstateExperience) { 
        this._realEstate = realEstate;
    }   

    public customizeExperience(): String {
        return this._realEstate.customizeExperience();
    }

}