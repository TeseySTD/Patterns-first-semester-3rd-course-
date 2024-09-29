import { EstateBuilder } from "../Builders/estate_builder";
import { EstateDirector } from "./estate_director";
import { RealEstate } from "../Entities/real_estate";
import { HouseBuilder } from "../Builders/house_builder";
import { ApartmentBuilder } from "../Builders/apartment_builder";
import { RoomBuilder } from "../Builders/room_builder";

export class LuxuryEstateDirector extends EstateDirector {

    constructor(estateBuilder: EstateBuilder) {
        super(estateBuilder);
    }
    public BuildDefault():RealEstate{
        const type = this._estateBuilder.constructor.name.replace("Builder", "").toLowerCase();
        this._estateBuilder.reset();
        this._estateBuilder
            .setAddress("")
            .setDescription(`Luxury ${type}`)
            .setPrice(100000)
            .setStatus("New")
            .setFurnished()
            .setAirConditioning();

        switch (type) {
            case "house":
                const h = this._estateBuilder as HouseBuilder;
                return h
                    .setPool()
                    .setGym()
                    .setGarden()
                    .setHeatingType("local")
                    .getEstate();
            case "apartment":
                const a = this._estateBuilder as ApartmentBuilder;
                return a
                    .setRoomsNumber(5)
                    .setHeatingType("central")
                    .setElevator()
                    .setParking()
                    .getEstate();
            case "room":
                const r = this._estateBuilder as RoomBuilder;
                return r
                    .setNeighbors(true)
                    .setHeatingType("central")
                    .getEstate();
            default:
                throw new Error("Wrong type of estate.");
        }
    }
}