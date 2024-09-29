using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class AddRoomTemplate : AbstractTemplate
    {
        public AddRoomTemplate(params string[] args) : base(args)
        {
        }

        protected override string AddEmpty()
        {
            var agency = Agency.GetInstance();
            agency.AddEstate(new Room());
            return "Added empty new Room";
        }

        protected override string AddEstate()
        {
            if(_params.Length != 5) 
                return ReturnError();
            var agency = Agency.GetInstance();
            agency.AddEstate(new Room(_params[0], _params[1], Convert.ToDouble(_params[2]), Convert.ToDouble(_params[3]), _params[4]));
            return "Added new Room with args: " + string.Join(", ", _params);
        }

        // protected override string ReturnError()
        // {
        //     return "Failed to add new Room with args: " + string.Join(", ", _params);
        // }
    }
}
