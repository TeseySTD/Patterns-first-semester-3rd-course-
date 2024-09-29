"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var room_1 = require("./Entities/room");
var apartment_1 = require("./Entities/apartment");
var customer_1 = require("./Entities/customer");
var house_1 = require("./Entities/house");
var realtor_apartment_1 = require("./Entities/realtor_apartment");
var realtor_house_1 = require("./Entities/realtor_house");
var realtor_room_1 = require("./Entities/realtor_room");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        var estates = [
            new house_1.House("House address", "House description", 50, 1000, "New"),
            new room_1.Room("Room address", "Room description", 50, 1000, "New"),
            new apartment_1.Apartment("Apartment address", "Apartment description", 50, 1000, "New", 3)
        ];
        var realtorChain = new realtor_apartment_1.RealtorApartment("RealtorApartment name", "RealtorApartment phone", "RealtorApartment email", 5);
        realtorChain.SetNext(new realtor_house_1.RealtorHouse("RelatorHouse name", "RelatorHouse phone", "RelatorHouse email", 5))
            .SetNext(new realtor_room_1.RealtorRoom("RealtorRoom name", "RealtorRoom phone", "RealtorRoom email", 5));
        estates.forEach(function (estate) { return realtorChain.SellEstate(new customer_1.Customer("Customer name", "Customer phone", "Customer email"), estate); });
        console.log("End testing... \n\n");
    };
    return Program;
}());
Program.main([]);
