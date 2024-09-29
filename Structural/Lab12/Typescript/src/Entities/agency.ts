import { Apartment } from './apartment';
import { Room } from './room';
import { House } from './house';
import { Realtor } from './realtor';
import { RealEstate } from './real_estate';
import { RealtorSubsystem } from '../realtor_subsystem';
import { EstateSubsystem } from '../estate_subsystem';
export class Agency {
    private static _instance: Agency;
    private static _apartments: Apartment[];
    private static _rooms: Room[];
    private static _houses: House[];
    private static _realtors: Realtor[];

    private static readonly _lockInstance = new Object();
    private static readonly _lockApartments = new Object();
    private static readonly _lockRooms = new Object();
    private static readonly _lockHouses = new Object();
    private static readonly _lockRealtors = new Object();
    private static readonly _realtorSubsystem = new RealtorSubsystem();
    private static readonly _estateSubsystem = new EstateSubsystem();

    private constructor() {
        Agency._apartments = [];
        Agency._realtors = [];
        Agency._houses = [];
        Agency._rooms = [];
    }

    public static GetInstance(): Agency {
        if (!Agency._instance) {
                if (!Agency._instance) {
                    Agency._instance = new Agency();
                }
        }
        return Agency._instance;
    }

    public get Apartments(): Apartment[] {
        return Agency._apartments;
    }

    public get Rooms(): Room[] {
            return Agency._rooms;
        
    }

    public get Houses(): House[] {
            return Agency._houses;
    }

    public get Realtors(): Realtor[] {
            return Agency._realtors;
        
    }

    public AddRealtor(realtor: Realtor): void {
            Agency._realtors.push(realtor);
        
    }

    public RemoveRealtor(realtor: Realtor): void {
        const index = Agency._realtors.indexOf(realtor);
        if (index > -1) {
            Agency._realtors.splice(index, 1);
        }
    }
    

    public AddEstate(estate: RealEstate): void {
        switch (estate.constructor.name) {
            case "Apartment":
                Agency._apartments.push(estate as Apartment);
                break;
            case "Room":
                Agency._rooms.push(estate as Room);
                break;
            case "House":
                Agency._houses.push(estate as House);
                break;
        }
    }

    public RemoveEstate(estate: RealEstate): void {
        switch (estate.constructor.name) {
            case "Apartment":
                if (Agency._apartments.indexOf(estate as Apartment) > -1) {
                    Agency._apartments.splice(Agency._apartments.indexOf(estate as Apartment), 1);
                }
                break;
            case "Room":
                if (Agency._rooms.indexOf(estate as Room) > -1) {
                    Agency._rooms.splice(Agency._rooms.indexOf(estate as Room), 1);
                }
                break;
            case "House":
                if (Agency._houses.indexOf(estate as House) > -1) {
                    Agency._houses.splice(Agency._houses.indexOf(estate as House), 1);
                }
                break;
        }
    }

    public static printSubsystemsPortfolio(): void {
        console.log([
            Agency._realtorSubsystem.realtorsPortfolio(Agency._realtors),
            "\n\nApartments:",
            Agency._estateSubsystem.estatePortfolio(Agency._apartments),
            "\n\nRooms:",
            Agency._estateSubsystem.estatePortfolio(Agency._rooms),
            "\n\nHouses:",
            Agency._estateSubsystem.estatePortfolio(Agency._houses)
        ].join(""));
    }
}