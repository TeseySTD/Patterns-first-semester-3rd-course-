using System;
using System.Collections.Generic;
using System.Text;
using C_.Builders;
using C_.Entities;

namespace C_.Directors
{
    public abstract class EstateDirector
    {
        protected EstateBuilder _estateBuilder;
        public EstateDirector(EstateBuilder estateBuilder){
            _estateBuilder = estateBuilder;
        }

        public abstract RealEstate BuildDefault();
    }
}
