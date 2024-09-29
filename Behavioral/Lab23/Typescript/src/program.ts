import { Agency } from './Entities/agency';
import { Apartment } from './Entities/apartment';
import { Customer } from './Entities/customer';
import { House } from './Entities/house';
import { Realtor } from './Entities/realtor';
import { Room } from './Entities/room';
import { TaxCalculatorVisitor } from './Entities/tax_calculator_visitor';
import { RealtorSubsystem } from './realtor_subsystem';
class Program {
    private static _usersCount: number = 2;
    public static main(args: string[]): void {
        console.log("Start testing... \n\n");
        Program.TestAgency();
        console.log("\nEnd testing... \n\n");
    }

    private static TestAgency(): void {
        const agency: Agency = Agency.GetInstance();
        for (let i: number = 0; i < Program._usersCount; i++)
            Program.AddTestData(agency, i);
        const visitor = new TaxCalculatorVisitor();

        for(const a of agency.Apartments)
            visitor.visit(a);
        for(var h of agency.Houses) 
            visitor.visit(h);
        for(var r of agency.Rooms) 
            visitor.visit(r);
    }
    private static GetRandomArbitrary(min, max):number {
        return Math.random() * (max - min) + min;
    }
    private static AddTestData(agency: Agency, index: number): void {

        const a: Apartment = new Apartment(`Apartment Address ${index}`, `Description ${index}`, this.GetRandomArbitrary(50,100), this.GetRandomArbitrary(2000,200000), "New", 2);
        const ro: Room = new Room(`Room Address ${index}`, `Room Description ${index}`, this.GetRandomArbitrary(20,50), this.GetRandomArbitrary(2000,200000), "Old");
        const h: House = new House(`House Address ${index}`, `House Description ${index}`, this.GetRandomArbitrary(100,200), this.GetRandomArbitrary(2000,200000), "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
        const r: Realtor = new Realtor(`Realtor ${index}`, "123-456-7890", `realtor${index}@example.com`, 2);
        r.RealEstates.push(a);
        r.RealEstates.push(ro);
        r.RealEstates.push(h);
        agency.AddRealtor(r);
        const customer1: Customer = new Customer(`Customer1`, "123-456-7890", `customer1@example.com`);
        const customer2: Customer = new Customer(`Customer2`, "234-456-7890", `customer2@example.com`);
        r.Customers.push(customer1);
        r.Customers.push(customer2);
    }

}

Program.main([]);

