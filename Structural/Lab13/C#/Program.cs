using C_.Builders;
using C_.Directors;
using C_.Entities;
using C_.Entities.Decorators;
using C_.Interfaces;

namespace C_
{
    class Program
    {
        private static int _usersCount = 10;
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            TestAgency();
            CachedAgency cachedAgency= new CachedAgency( Agency.GetInstance());
            Console.WriteLine(cachedAgency.FindEstateByID(1));
            Console.WriteLine(cachedAgency.FindEstateByID(1));
            Console.WriteLine("End testing... \n\n");
        }
        public static void TestAgency(){
            Agency agency = Agency.GetInstance();
            for(int i = 0; i < _usersCount; i++)
                AddTestData(agency, i);
        }

        public static void AddTestData(Agency agency, int index)
        {
            var a = new Apartment($"Apartment Address {index}", $"Description {index}", 50, 100000, "New", 2);
            var ro = new Room($"Room Address {index}", $"Room Description {index}", 20, 50000, "Old");
            var h = new House($"House Address {index}", $"House Description {index}", 100, 200000, "Middle aged");
            agency.AddEstate(a);
            agency.AddEstate(ro);
            agency.AddEstate(h);
        }
    }
    
}
