using System;
using System.Collections.Generic;
using System.Text;

namespace C_.TemplateMethods
{
    public abstract class AbstractTemplate
    {
        protected string[] _params;
        public AbstractTemplate(params string[] args){
            _params = args;
        }
        public string[] Params{get; set;}

        public string Execute(){
            if(_params.Length == 0)
                return AddEmpty();
            else 
                return AddEstate();
        }

        protected abstract string AddEmpty();
        protected abstract string AddEstate();

        protected virtual string ReturnError() {
            return "Failed to add new Estate with args: " + string.Join(", ", _params);
        }
    }
}
