"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agency = void 0;
var Agency = /** @class */ (function () {
    function Agency() {
        Agency._apartments = [];
        Agency._realtors = [];
        Agency._houses = [];
        Agency._rooms = [];
    }
    Agency.GetInstance = function () {
        if (!Agency._instance) {
            if (!Agency._instance) {
                Agency._instance = new Agency();
            }
        }
        return Agency._instance;
    };
    Object.defineProperty(Agency.prototype, "Apartments", {
        get: function () {
            return Agency._apartments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Agency.prototype, "Rooms", {
        get: function () {
            return Agency._rooms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Agency.prototype, "Houses", {
        get: function () {
            return Agency._houses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Agency.prototype, "Realtors", {
        get: function () {
            return Agency._realtors;
        },
        enumerable: false,
        configurable: true
    });
    Agency.prototype.AddRealtor = function (realtor) {
        Agency._realtors.push(realtor);
    };
    Agency.prototype.RemoveRealtor = function (realtor) {
        var index = Agency._realtors.indexOf(realtor);
        if (index > -1) {
            Agency._realtors.splice(index, 1);
        }
    };
    Agency.prototype.AddEstate = function (estate) {
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
    };
    Agency.prototype.RemoveEstate = function (estate) {
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
    };
    Agency._lockInstance = new Object();
    Agency._lockApartments = new Object();
    Agency._lockRooms = new Object();
    Agency._lockHouses = new Object();
    Agency._lockRealtors = new Object();
    return Agency;
}());
exports.Agency = Agency;
