{
    interface IRealEstateService
    {
        getValue(): number;
    }

    class HouseService implements IRealEstateService
    {
        getValue(): number
        {
            return 250000; 
        }
    }

    class RealEstateManager
    {
        private readonly realEstateService: IRealEstateService;

        constructor(realEstateService: IRealEstateService)
        {
            this.realEstateService = realEstateService;
        }

        displayPropertyValue()
        {
            console.log(`Estate Value: ${this.realEstateService.getValue()}`);
        }
    }

    class Program
    {
        public static Main(): void
        {
            const houseService: IRealEstateService = new HouseService();
            const manager = new RealEstateManager(houseService);
            manager.displayPropertyValue();
        }
    }

    Program.Main();
}