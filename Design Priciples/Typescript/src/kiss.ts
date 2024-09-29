{
    class SimpleHouse
    {
        constructor(public Address: string, public Value: number)
        {
        }

        DisplayDetails()
        {
            console.log(`House at ${this.Address} valued at ${this.Value}`);
        }
    }

    class Program
    {
        static Main()
        {
            let house = new SimpleHouse("123 Main St", 200000);
            house.DisplayDetails();
        }
    }

    Program.Main();
}