"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agency_1 = require("./Entities/agency");
var apartment_1 = require("./Entities/apartment");
var house_1 = require("./Entities/house");
var realtor_1 = require("./Entities/realtor");
var room_1 = require("./Entities/room");
var real_estate_flyweight_factory_1 = require("./Entities/real_estate_flyweight_factory");
var real_state_flyweight_1 = require("./Entities/real_state_flyweight");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        var factory = new real_estate_flyweight_factory_1.RealEstateFlyweightFactory(new real_state_flyweight_1.RealEstateFlyweight(true, true, false, true, true, false), new real_state_flyweight_1.RealEstateFlyweight(false, true, true, true, false, true), new real_state_flyweight_1.RealEstateFlyweight(true, false, true, false, true, true));
        var a = new apartment_1.Apartment("123 Main St", "Nice apartment", 100, 200000, "New", 5, factory.getFlyweight(new real_state_flyweight_1.RealEstateFlyweight(true, true, false, true, true, false)));
        var r = new room_1.Room("456 Elm St", "Cool room", 200, 500000, "Standard", factory.getFlyweight(new real_state_flyweight_1.RealEstateFlyweight(true, false, true, false, true, true)));
        var h = new house_1.House("456 Elm St", "Beautiful house", 200, 500000, "Old", factory.getFlyweight(new real_state_flyweight_1.RealEstateFlyweight(false, false, true, true, false, true)));
        console.log("Created estates: ".concat(a, "\n ").concat(r, "\n ").concat(h, "\n"));
        console.log("\nEnd testing... \n\n");
    };
    Program.TestAgency = function () {
        var agency = agency_1.Agency.GetInstance();
        for (var i = 0; i < Program._userCount; i++)
            this.AddTestData(agency, i);
    };
    Program.AddTestData = function (agency, index) {
        var a = new apartment_1.Apartment("Apartment Address ".concat(index), "Description ".concat(index), 50, 100000, "New", 2);
        var ro = new room_1.Room("Room Address ".concat(index), "Room Description ".concat(index), 20, 50000, "Old");
        var h = new house_1.House("House Address ".concat(index), "House Description ".concat(index), 100, 200000, "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
        var r = new realtor_1.Realtor("Realtor ".concat(index), "123-456-7890", "realtor".concat(index, "@example.com"), 2);
        r.RealEstates.push(a);
        r.RealEstates.push(ro);
        r.RealEstates.push(h);
        agency.AddRealtor(r);
    };
    Program._userCount = 10;
    return Program;
}());
Program.main([]);
