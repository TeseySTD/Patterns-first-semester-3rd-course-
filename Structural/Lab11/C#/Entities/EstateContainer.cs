using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities
{
    public class EstateContainer : IPrintEstateInfo
    {
        protected List<IPrintEstateInfo> _realEstateList = new List<IPrintEstateInfo>();

        public void Add(IPrintEstateInfo estate){
            _realEstateList.Add(estate);
        }
        public void Remove(IPrintEstateInfo estate){
            _realEstateList.Remove(estate);
        }

        public void PrintEstateInfo(string tab = ""){
            Console.WriteLine(tab + "Estate list in container with hash code " + GetHashCode() + ":(");
            foreach(IPrintEstateInfo estate in _realEstateList){
                estate.PrintEstateInfo(tab + tab);
            }
            Console.WriteLine(tab + ")");
        }
    }
}
