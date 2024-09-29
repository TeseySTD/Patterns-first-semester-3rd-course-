"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agency_1 = require("./Entities/agency");
var apartment_1 = require("./Entities/apartment");
var customer_1 = require("./Entities/customer");
var house_1 = require("./Entities/house");
var realtor_1 = require("./Entities/realtor");
var room_1 = require("./Entities/room");
var buyable_state_1 = require("./Entities/States/buyable_state");
var rentable_state_1 = require("./Entities/States/rentable_state");
var sellable_state_1 = require("./Entities/States/sellable_state");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        this.TestAgency();
        console.log("\nEnd testing... \n\n");
    };
    Program.TestAgency = function () {
        var agency = agency_1.Agency.GetInstance();
        var a = new apartment_1.Apartment("Apartment Address", "Description", 50, 100000, "New", 2);
        var ro = new room_1.Room("Room Address", "Room Description", 20, 50000, "Old");
        var h = new house_1.House("House Address", "House Description", 100, 200000, "Middle aged");
        a.state = new sellable_state_1.SellableState(a);
        ro.state = new rentable_state_1.RentableState(ro);
        h.state = new buyable_state_1.BuyableState(h);
        a.sell(new customer_1.Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"));
        ro.setEstateToBuy(new customer_1.Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 50000);
        h.setEstateToBuy(new customer_1.Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 200000);
        h.setEstateToBuy(new customer_1.Customer("Vasya Pupkin", "8 800 555 35 35", "pupa@example.com"), 200000);
    };
    Program.AddTestData = function (agency, index) {
        var a = new apartment_1.Apartment("Apartment Address ".concat(index), "Description ".concat(index), 50, 100000, "New", 2);
        var ro = new room_1.Room("Room Address ".concat(index), "Room Description ".concat(index), 20, 50000, "Old");
        var h = new house_1.House("House Address ".concat(index), "House Description ".concat(index), 100, 200000, "Middle aged");
        a.state = new sellable_state_1.SellableState(a);
        ro.state = new rentable_state_1.RentableState(ro);
        h.state = new buyable_state_1.BuyableState(h);
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
