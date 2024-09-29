using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.Decorators
{
    public class VirtualTourDecorator: RealEstateExperienceDecorator
    {
        public VirtualTourDecorator(IRealEstateExperience realEstate) : base(realEstate) { }

        public override string CustomizeExperience()
        {
            return _realEstate.CustomizeExperience() + "\nIncludes a 3D virtual tour of the property.";
        }
    }
}
