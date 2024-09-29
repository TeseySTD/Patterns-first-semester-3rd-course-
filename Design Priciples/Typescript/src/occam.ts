{
    
    class House
    {
        constructor(public address: string, public value: number)
        {
        }

        displayInfo()
        {
            console.log(`House at ${this.address} valued at ${this.value}`);
        }
    }

    class Program
    {
        static main()
        {
            let house = new House("123 Main St", 300000);
            house.displayInfo();
        }
    }

    Program.main();
}