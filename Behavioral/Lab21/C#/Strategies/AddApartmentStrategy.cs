using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class AddApartmentStrategy : AbstractStrategy
    {
        public AddApartmentStrategy(params string[] args) : base(args)
        {
        }

        public override string Execute()
        {
            var agency = Agency.GetInstance();
            if(_params.Length == 0){
                agency.AddEstate(new Apartment());
                return "Added empty new Apartment";
            }
            else if(_params.Length == 6){
                agency.AddEstate(new Apartment(_params[0], _params[1], Convert.ToDouble(_params[2]), Convert.ToDouble(_params[3]), _params[4], Convert.ToInt16(_params[5])));
                return "Added new Apartment with args: " + string.Join(", ", _params);
            }
            return "Failed to add new Apartment with args: " + string.Join(", ", _params);
        }
    }
}

