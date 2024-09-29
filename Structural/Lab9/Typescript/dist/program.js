"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var house_builder_1 = require("./Builders/house_builder");
var apartment_builder_1 = require("./Builders/apartment_builder");
var cheap_estate_director_1 = require("./Directors/cheap_estate_director");
var luxury_estate_director_1 = require("./Directors/luxury_estate_director");
var estate_container_1 = require("./Entities/estate_container");
var room_builder_1 = require("./Builders/room_builder");
var standard_estate_director_1 = require("./Directors/standard_estate_director");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        var director;
        var branch1 = new estate_container_1.EstateContainer();
        var branch2 = new estate_container_1.EstateContainer();
        var estateContainer = new estate_container_1.EstateContainer();
        console.log("Start testing... \n\n");
        director = new luxury_estate_director_1.LuxuryEstateDirector(new apartment_builder_1.ApartmentBuilder());
        branch1.add(director.BuildDefault());
        director = new cheap_estate_director_1.CheapEstateDirector(new house_builder_1.HouseBuilder());
        branch1.add(director.BuildDefault());
        director = new standard_estate_director_1.StandardEstateDirector(new room_builder_1.RoomBuilder());
        branch2.add(director.BuildDefault());
        branch1.add(branch2);
        estateContainer.add(branch1);
        estateContainer.add(director.BuildDefault());
        estateContainer.printEstateInfo("----");
        console.log("\nEnd testing... \n\n");
    };
    return Program;
}());
Program.main([]);
