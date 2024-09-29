using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_.TemplateMethods
{
    public class RemoveEstateCommand : AbstractCommand
    {
        public RemoveEstateCommand(params string[] args) : base(args)
        {
        }


        public override string Execute(){
            var agency = Agency.GetInstance();
            var types = new string[]{"apartment", "house", "room"};
            int id;
            if(_params.Length == 2){
                if(!types.Contains(_params[0].ToLower()))
                    return "Failed to remove estate with args: " + "Wrong first parameter: type of estate";
                else if(!int.TryParse(_params[1], out id))
                    return "Failed to remove estate with args: " + "Wrong second parameter: id of estate isn't positive integer";
                try{
                    agency.RemoveEstate(_params[0], id);
                    return "Removed estate with args: " + string.Join(", ", _params);
                }
                catch(Exception e){
                    return "Failed to remove estate with args: " + e.Message;
                }
            }
            return "Failed to remove estate with args: " + "Uncorrected length of args";
        }
    }
}
