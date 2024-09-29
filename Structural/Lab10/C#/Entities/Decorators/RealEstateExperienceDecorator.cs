using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities.Decorators
{
    public abstract class RealEstateExperienceDecorator : IRealEstateExperience
    {
        protected IRealEstateExperience _realEstate;

        public RealEstateExperienceDecorator(IRealEstateExperience realEstate)
        {
            _realEstate = realEstate;
        }

        public virtual string CustomizeExperience()
        {
            return _realEstate.CustomizeExperience();
        }
    }

}
