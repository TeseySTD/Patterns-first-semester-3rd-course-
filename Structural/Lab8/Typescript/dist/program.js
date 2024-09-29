"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var house_builder_1 = require("./Builders/house_builder");
var apartment_builder_1 = require("./Builders/apartment_builder");
var cheap_estate_director_1 = require("./Directors/cheap_estate_director");
var luxury_estate_director_1 = require("./Directors/luxury_estate_director");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        var director;
        director = new luxury_estate_director_1.LuxuryEstateDirector(new apartment_builder_1.ApartmentBuilder());
        console.log("Create new luxury apartment ".concat(director.BuildDefault().toString()));
        director = new cheap_estate_director_1.CheapEstateDirector(new house_builder_1.HouseBuilder());
        console.log("Create new cheap house ".concat(director.BuildDefault().toString()));
    };
    return Program;
}());
Program.main([]);
