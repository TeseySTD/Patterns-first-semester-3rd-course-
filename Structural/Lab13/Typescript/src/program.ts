import { IRealEstateExperience } from './Interfaces/real_estate_experience';
import { Apartment } from './Entities/apartment';
import { VirtualTourDecorator } from './Entities/Decorators/virtyal_tour_decorator';
import { AugmentedRealityDecorator } from './Entities/Decorators/augmented_reality_decorator';
import { InteractiveStorytellingDecorator } from './Entities/Decorators/interactive_storytelling_decorator';
import { Agency } from './Entities/agency';
import { CachedAgency } from './Entities/cached_agency';
import { House } from './Entities/house';
import { Room } from './Entities/room';
import { IAgency } from './Interfaces/agency';
class Program {
    private static _usersCount = 10;
    static main(): void {
        console.log("Start testing... \n\n");
        Program.TestAgency();
        const cachedAgency = new CachedAgency(Agency.GetInstance());
        console.log(cachedAgency.FindEstateByID(1));
        console.log(cachedAgency.FindEstateByID(1));
        console.log("End testing... \n\n");
    }

    private static TestAgency(): void {
        const agency = Agency.GetInstance();
        for (let i = 0; i < Program._usersCount; i++)
            Program.AddTestData(agency, i);
    }

    private static AddTestData(agency: Agency, index: number): void {
        const a = new Apartment(`Apartment Address ${index}`, `Description ${index}`, 50, 100000, "New", 2);
        const ro = new Room(`Room Address ${index}`, `Room Description ${index}`, 20, 50000, "Old");
        const h = new House(`House Address ${index}`, `House Description ${index}`, 100, 200000, "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
    }

}

Program.main();