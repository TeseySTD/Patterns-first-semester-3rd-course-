using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class AddHouseCommand : AbstractCommand
    {

        public AddHouseCommand(params string[] args) : base(args) {}

        public override string Execute()
        {
            var agency = Agency.GetInstance();
            if(_params.Length == 0){
                agency.AddEstate(new House());
                return "Added empty new House";
            }
            else if(_params.Length == 5){
                agency.AddEstate(new House(_params[0], _params[1], Convert.ToDouble(_params[2]), Convert.ToDouble(_params[3]), _params[4]));
                return "Added new House with args: " + string.Join(", ", _params);
            }
            return "Failed to add new House with args: " + string.Join(", ", _params);
        }
    }
}

