using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.Decorators
{
    public class InteractiveStorytellingDecorator : RealEstateExperienceDecorator
    {
        public InteractiveStorytellingDecorator(IRealEstateExperience realEstate) : base(realEstate) { }

        public override string CustomizeExperience()
        {
            return _realEstate.CustomizeExperience() + "\nOffers an interactive storytelling experience that showcases the history and unique aspects of the property.";
        }
    }
}
