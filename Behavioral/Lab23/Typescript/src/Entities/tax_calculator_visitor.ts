import { IEstateVisitor } from "../Interfaces/estate_visitor";
import { Apartment } from "./apartment";
import { House } from "./house";
import { RealEstate } from "./real_estate";
import { Room } from "./room";


export class TaxCalculatorVisitor implements IEstateVisitor {
    
    public visit(estate: RealEstate): void {
        const className = estate instanceof House ? "House" : estate instanceof Apartment ? "Apartment" : "Room";
        switch (className) {
            case ("House"):
                this.visitHouse(estate as House);
                break;
            case ("Apartment"):
                this.visitApartment(estate as Apartment);
                break;
            case ("Room"):
                this.visitRoom(estate as Room);
                break;
            default:
                throw new Error("Unknown RealEstate type");
        }
    }

    protected visitHouse(house: House): void {
        const tax = house.area * 1.5;
        console.log(`House at ${house.address}: Tax is ${tax.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
    }

    protected visitApartment(apartment: Apartment): void {
        const tax = apartment.area * 1.2;
        console.log(`Apartment at ${apartment.address}: Tax is ${tax.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
    }

    protected visitRoom(room: Room): void {
        const tax = room.area * 0.8;
        console.log(`Room at ${room.address}: Tax is ${tax.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
    } 
}