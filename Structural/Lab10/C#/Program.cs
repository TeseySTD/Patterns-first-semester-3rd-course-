using C_.Builders;
using C_.Directors;
using C_.Entities;
using C_.Entities.Decorators;
using C_.Interfaces;

namespace C_
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Start testing... \n\n");
            IRealEstateExperience apartment = new Apartment("123 Main St", "Apartment", 70, 100000, "New",2);

            apartment = new VirtualTourDecorator(apartment);
            apartment = new AugmentedRealityDecorator(apartment);
            apartment = new InteractiveStorytellingDecorator(apartment);

            Console.WriteLine(apartment.CustomizeExperience());
            Console.WriteLine("End testing... \n\n");
        }

    }
}
