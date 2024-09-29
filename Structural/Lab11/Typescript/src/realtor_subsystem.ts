import { Realtor } from "./Entities/realtor"

export class RealtorSubsystem {
    public realtorsPortfolio(realtors:Array<Realtor>):string{
        const sb: string[] = [];
        for (const realtor of realtors) {
            sb.push(`Realtor ${realtor.nameAndSurname} has ${realtor.RealEstates.length} estates\n`);
        }

        return sb.join("");
    }
}