"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agency_1 = require("./Entities/agency");
var apartment_1 = require("./Entities/apartment");
var customer_1 = require("./Entities/customer");
var house_1 = require("./Entities/house");
var realtor_1 = require("./Entities/realtor");
var room_1 = require("./Entities/room");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        Program.TestAgency();
        console.log("\nEnd testing... \n\n");
    };
    Program.TestAgency = function () {
        var agency = agency_1.Agency.GetInstance();
        for (var i = 0; i < Program._usersCount; i++)
            Program.AddTestData(agency, i);
        for (var _i = 0, _a = agency.Realtors; _i < _a.length; _i++) {
            var realtor = _a[_i];
            realtor.NotifyCustomers();
        }
    };
    Program.GetRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Program.AddTestData = function (agency, index) {
        var a = new apartment_1.Apartment("Apartment Address ".concat(index), "Description ".concat(index), 50, this.GetRandomArbitrary(2000, 200000), "New", 2);
        var ro = new room_1.Room("Room Address ".concat(index), "Room Description ".concat(index), 20, this.GetRandomArbitrary(2000, 200000), "Old");
        var h = new house_1.House("House Address ".concat(index), "House Description ".concat(index), 100, this.GetRandomArbitrary(2000, 200000), "Middle aged");
        agency.AddEstate(a);
        agency.AddEstate(ro);
        agency.AddEstate(h);
        var r = new realtor_1.Realtor("Realtor ".concat(index), "123-456-7890", "realtor".concat(index, "@example.com"), 2);
        r.RealEstates.push(a);
        r.RealEstates.push(ro);
        r.RealEstates.push(h);
        agency.AddRealtor(r);
        var customer1 = new customer_1.Customer("Customer1", "123-456-7890", "customer1@example.com");
        var customer2 = new customer_1.Customer("Customer2", "234-456-7890", "customer2@example.com");
        r.Customers.push(customer1);
        r.Customers.push(customer2);
    };
    Program._usersCount = 2;
    return Program;
}());
Program.main([]);
