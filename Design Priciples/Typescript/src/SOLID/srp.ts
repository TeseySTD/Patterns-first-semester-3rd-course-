{
    class RealEstate
    {
        constructor(public address: string, public value: number) { }
    }

    class RealEstateReport
    {
        printReport(property: RealEstate) {
            console.log(`Property at: ${property.address}, valued at: ${property.value}`);
        }
    }

    class Program
    {
        static main(): void {
            const property = new RealEstate("123 Main St", 200000);
            const report = new RealEstateReport();
            report.printReport(property);
        }
    }

    Program.main();
}