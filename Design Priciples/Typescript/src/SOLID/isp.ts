{
    interface IResidentialProperty
    {
        getNumberOfBedrooms(): number;
    }

    interface ICommercialProperty
    {
        getMonthlyRent(): number;
    }

    class House implements IResidentialProperty
    {
        getNumberOfBedrooms(): number
        {
            return 3; 
        }
    }

    class Office implements ICommercialProperty
    {
        getMonthlyRent(): number
        {
            return 5000;
        }
    }

    class Program
    {
        public static Main(): void
        {
            const house: IResidentialProperty = new House();
            const office: ICommercialProperty = new Office();

            console.log(`Number of bedrooms in house: ${house.getNumberOfBedrooms()}`);
            console.log(`Monthly rent for office: ${office.getMonthlyRent()}`);
        }
    }

    Program.Main();
}