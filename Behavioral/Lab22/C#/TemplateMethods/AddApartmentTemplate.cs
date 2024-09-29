using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class AddApartmentTemplate : AbstractTemplate
    {
        public AddApartmentTemplate(params string[] args) : base(args){}


        protected override string AddEmpty()
        {
            var agency = Agency.GetInstance();
            agency.AddEstate(new Apartment());
            return "Added empty new Apartment";
        }

        protected override string AddEstate()
        {
            if(_params.Length != 6) 
                return ReturnError();
            var agency = Agency.GetInstance();
            agency.AddEstate(new Apartment(_params[0], _params[1], Convert.ToDouble(_params[2]), Convert.ToDouble(_params[3]), _params[4], Convert.ToInt16(_params[5])));
            return "Added new Apartment with args: " + string.Join(", ", _params);
        }

        protected override string ReturnError(){
            return "Failed to add new Apartment with args: " + string.Join(", ", _params);
        }
    }
}

