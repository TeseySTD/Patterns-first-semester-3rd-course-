using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.Decorators
{
    public class AugmentedRealityDecorator : RealEstateExperienceDecorator
    {
        public AugmentedRealityDecorator(IRealEstateExperience realEstate) : base(realEstate) { }

        public override string CustomizeExperience()
        {
            return _realEstate.CustomizeExperience() + "\nFeatures augmented reality to visualize furniture and decor.";
        }
    }
}
