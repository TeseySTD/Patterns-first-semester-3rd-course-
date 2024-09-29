using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

namespace C_
{
    public class EstatePool
    {
        private static Stack<RealEstate> _pool = new Stack<RealEstate>();
        private static object _lock = new object();

        public static RealEstate GetInstance(string type)
        {
            lock(_lock){            
                if (_pool.Count > 0)
                {
                    foreach(var v in _pool){
                        if(v.GetType().Name.ToLower() == type){
                            Console.WriteLine($"{type} with hash {v.GetHashCode()} was returned.");
                            return _pool.Pop();
                        }
                    }
                    
                }
                var instance = EstateFactory(type);
                // Console.WriteLine($"{type} with hash {instance.GetHashCode()} was created.");
                return instance;
            }
        }

        private static RealEstate EstateFactory(string type) => type.ToLower() switch 
        {
            "apartment" => new Apartment(),
            "room" => new Room(),
            "house" => new House(),
            _ => throw new Exception("Wrong type of estate")
        };
        

        public static void ReleaseInstance(RealEstate instance)
        {
            lock(_lock){ 
                instance.Reset();
                _pool.Push(instance);
            }
        }
    }
}
