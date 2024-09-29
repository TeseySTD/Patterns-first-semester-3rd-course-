"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apartment_1 = require("./Entities/apartment");
var agency_1 = require("./Entities/agency");
var cached_agency_1 = require("./Entities/cached_agency");
var house_1 = require("./Entities/house");
var room_1 = require("./Entities/room");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function () {
        console.log("Start testing... \n\n");
        Program.TestAgency();
        var cachedAgency = new cached_agency_1.CachedAgency(agency_1.Agency.GetInstance());
        console.log(cachedAgency.FindEstateByID(1));
        console.log(cachedAgency.FindEstateByID(1));
        console.log("End testing... \n\n");
    };
    Program.TestAgency = function () {
        var agency = agency_1.Agency.GetInstance();
        for (var i = 0; i < Program._usersCount; i++)
            Program.AddTestData(agency, i);
    };
    Program.AddTestData = function (agency, index) {
        var a = new apartment_1.Apartment("Apartment Address ".concat(index), "Description ".concat(index), 50, 100000, "New", 2);
        var ro = new room_1.Room("Room Address ".concat(index), "Room Description ".concat(index), 20, 50000, "Old");
        var h = new house_1.House("House Address ".concat(index), "House Description ".concat(index), 100, 200000, "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
    };
    Program._usersCount = 10;
    return Program;
}());
Program.main();
