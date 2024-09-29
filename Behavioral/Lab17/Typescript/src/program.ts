import { Agency } from './Entities/agency';
import { Apartment } from './Entities/apartment';
import { House } from './Entities/house';
import { Realtor } from './Entities/realtor';
import { Room } from './Entities/room';
import { RealtorSubsystem } from './realtor_subsystem';
class Program {
    private static readonly _userCount = 10;
    static main(args: string[]): void {

        console.log("Start testing... \n\n");
        this.TestAgency();
        const realtorSubsystem = new RealtorSubsystem();
        realtorSubsystem.MainAction(Agency.GetInstance().Realtors);
        console.log("\nEnd testing... \n\n");
    }

    public static  TestAgency(): void {
        const agency = Agency.GetInstance();
        for(let i = 0; i < Program._userCount; i++)
            this.AddTestData(agency, i);
    }

    private static AddTestData(agency: Agency, index: number): void{
        const a = new Apartment(`Apartment Address ${index}`, `Description ${index}`, 50, 100000, "New", 2);
        const ro = new Room(`Room Address ${index}`, `Room Description ${index}`, 20, 50000, "Old");
        const h = new House(`House Address ${index}`, `House Description ${index}`, 100, 200000, "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
        const r = new Realtor(`Realtor ${index}`, "123-456-7890", `realtor${index}@example.com`, 2);
        r.RealEstates.push(a);
        r.RealEstates.push(ro);
        r.RealEstates.push(h);
        agency.AddRealtor(r);
    }

}

Program.main([]);