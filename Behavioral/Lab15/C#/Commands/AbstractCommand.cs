using System;
using System.Collections.Generic;
using System.Text;

namespace C_.TemplateMethods
{
    public abstract class AbstractCommand : Interfaces.ICommand
    {
        protected string[] _params;
        public AbstractCommand(params string[] args){
            _params = args;
        }
        public string[] Params{get; set;}

        public abstract string Execute();
    }
}
