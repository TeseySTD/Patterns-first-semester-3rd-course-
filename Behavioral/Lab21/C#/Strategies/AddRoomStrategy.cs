using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class AddRoomStrategy : AbstractStrategy
    {
        public AddRoomStrategy(params string[] args) : base(args)
        {
        }
        public override string Execute()
        {
            var agency = Agency.GetInstance();
            if(_params.Length == 0){
                agency.AddEstate(new Room());
                return "Added empty new Room";
            }
            else if(_params.Length == 5){
                agency.AddEstate(new Room(_params[0], _params[1], Convert.ToDouble(_params[2]), Convert.ToDouble(_params[3]), _params[4]));
                return "Added new Room with args: " + string.Join(", ", _params);
            }
            return "Failed to add new Room with args: " + string.Join(", ", _params);
        }
    }
}
