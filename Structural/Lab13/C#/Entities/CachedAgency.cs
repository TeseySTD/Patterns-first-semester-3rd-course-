using System;
using System.Collections.Generic;
using System.Text;
using C_.Interfaces;

namespace C_.Entities
{
    public class CachedAgency : IAgency
    {
        private Agency _agency;
        private Dictionary<int, RealEstate> _cache = new Dictionary<int, RealEstate>();
        public CachedAgency(Agency agency)
        {
            _agency = agency;
        }

        public RealEstate FindEstateByID(int id){
            if (_cache.ContainsKey(id)){
                Console.WriteLine($"Get from cache {id}");
                return _cache[id];
            }
            else
            {
                Console.WriteLine($"Get from base {id}");
                var realEstate = _agency.FindEstateByID(id);
                _cache.Add(id, realEstate);
                return realEstate;
            }
        }
    }
}
