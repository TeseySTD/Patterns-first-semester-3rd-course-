using System;
using System.Collections.Generic;
using System.Text;

namespace C_.TemplateMethods
{
    public abstract class AbstractStrategy
    {
        protected string[] _params;
        public AbstractStrategy(params string[] args){
            _params = args;
        }
        public string[] Params{get; set;}

        public abstract string Execute();
    }
}
