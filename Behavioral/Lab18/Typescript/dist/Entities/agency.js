"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agency = void 0;
class Agency {
    constructor() {
        Agency._apartments = [];
        Agency._realtors = [];
        Agency._houses = [];
        Agency._rooms = [];
    }
    static GetInstance() {
        if (!Agency._instance) {
            if (!Agency._instance) {
                Agency._instance = new Agency();
            }
        }
        return Agency._instance;
    }
    get Apartments() {
        return Agency._apartments;
    }
    get Rooms() {
        return Agency._rooms;
    }
    get Houses() {
        return Agency._houses;
    }
    get Realtors() {
        return Agency._realtors;
    }
    AddRealtor(realtor) {
        Agency._realtors.push(realtor);
    }
    RemoveRealtor(realtor) {
        const index = Agency._realtors.indexOf(realtor);
        if (index > -1) {
            Agency._realtors.splice(index, 1);
        }
    }
    AddEstate(estate) {
        switch (estate.constructor.name) {
            case "Apartment":
                Agency._apartments.push(estate);
                break;
            case "Room":
                Agency._rooms.push(estate);
                break;
            case "House":
                Agency._houses.push(estate);
                break;
        }
    }
    RemoveEstate(estate) {
        switch (estate.constructor.name) {
            case "Apartment":
                if (Agency._apartments.indexOf(estate) > -1) {
                    Agency._apartments.splice(Agency._apartments.indexOf(estate), 1);
                }
                break;
            case "Room":
                if (Agency._rooms.indexOf(estate) > -1) {
                    Agency._rooms.splice(Agency._rooms.indexOf(estate), 1);
                }
                break;
            case "House":
                if (Agency._houses.indexOf(estate) > -1) {
                    Agency._houses.splice(Agency._houses.indexOf(estate), 1);
                }
                break;
        }
    }
}
exports.Agency = Agency;
Agency._lockInstance = new Object();
Agency._lockApartments = new Object();
Agency._lockRooms = new Object();
Agency._lockHouses = new Object();
Agency._lockRealtors = new Object();
