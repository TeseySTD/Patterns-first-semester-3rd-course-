import { Agency } from './Entities/agency';
import { Apartment } from './Entities/apartment';
import { Customer } from './Entities/customer';
import { House } from './Entities/house';
import { Realtor } from './Entities/realtor';
import { Room } from './Entities/room';
import { BuyableState } from './Entities/States/buyable_state';
import { RentableState } from './Entities/States/rentable_state';
import { SellableState } from './Entities/States/sellable_state';
import { RealtorSubsystem } from './realtor_subsystem';
class Program {
    private static readonly _userCount = 10;        
    public static main(args: string[]): void {
        console.log("Start testing... \n\n");
        this.TestAgency();
        console.log("\nEnd testing... \n\n");
    }

    private static TestAgency(): void {
        const agency = Agency.GetInstance();
        const a = new Apartment(`Apartment Address`, `Description`, 50, 100000, "New", 2);
        const ro = new Room(`Room Address`, `Room Description`, 20, 50000, "Old");
        const h = new House(`House Address`, `House Description`, 100, 200000, "Middle aged");
        a.state = new SellableState(a);
        ro.state = new RentableState(ro);
        h.state = new BuyableState(h);
        a.sell(new Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"));
        ro.setEstateToBuy(new Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 50000);
        h.setEstateToBuy(new Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 200000);
        h.setEstateToBuy(new Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 200000);
    }

    private static AddTestData(agency: Agency, index: number): void {
        const a = new Apartment(`Apartment Address ${index}`, `Description ${index}`, 50, 100000, "New", 2);
        const ro = new Room(`Room Address ${index}`, `Room Description ${index}`, 20, 50000, "Old");
        const h = new House(`House Address ${index}`, `House Description ${index}`, 100, 200000, "Middle aged");
        a.state = new SellableState(a);
        ro.state = new RentableState(ro);
        h.state = new BuyableState(h);
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