using System;
using System.Collections.Generic;
using System.Linq;

namespace C_
{
    public interface IRealEstateService
    {
        decimal GetPropertyValue();
    }

    public class HouseService : IRealEstateService
    {
        public decimal GetPropertyValue()
        {
            return 250000; 
        }
    }

    public class RealEstateManager
    {
        private readonly IRealEstateService _realEstateService;

        public RealEstateManager(IRealEstateService realEstateService)
        {
            _realEstateService = realEstateService;
        }

        public void DisplayPropertyValue()
        {
            Console.WriteLine($"Estate Value: {_realEstateService.GetPropertyValue()}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            IRealEstateService houseService = new HouseService();
            RealEstateManager manager = new RealEstateManager(houseService);
            manager.DisplayPropertyValue();
        }
    }
}
