import { IRealEstateExperience } from './Interfaces/real_estate_experience';
import { Apartment } from './Entities/apartment';
import { VirtualTourDecorator } from './Entities/Decorators/virtyal_tour_decorator';
import { AugmentedRealityDecorator } from './Entities/Decorators/augmented_reality_decorator';
import { InteractiveStorytellingDecorator } from './Entities/Decorators/interactive_storytelling_decorator';
class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        let apartment :IRealEstateExperience = new Apartment("123 Main St", "Apartment", 70, 100000, "New", 2);

        apartment = new VirtualTourDecorator(apartment);
        apartment = new AugmentedRealityDecorator(apartment);
        apartment = new InteractiveStorytellingDecorator(apartment);
        
        console.log(apartment.customizeExperience());
        console.log("End testing...\n\n");
    }
}

Program.main([]);