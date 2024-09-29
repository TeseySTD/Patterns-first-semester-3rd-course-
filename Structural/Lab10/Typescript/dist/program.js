"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apartment_1 = require("./Entities/apartment");
var virtyal_tour_decorator_1 = require("./Entities/Decorators/virtyal_tour_decorator");
var augmented_reality_decorator_1 = require("./Entities/Decorators/augmented_reality_decorator");
var interactive_storytelling_decorator_1 = require("./Entities/Decorators/interactive_storytelling_decorator");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        var apartment = new apartment_1.Apartment("123 Main St", "Apartment", 70, 100000, "New", 2);
        apartment = new virtyal_tour_decorator_1.VirtualTourDecorator(apartment);
        apartment = new augmented_reality_decorator_1.AugmentedRealityDecorator(apartment);
        apartment = new interactive_storytelling_decorator_1.InteractiveStorytellingDecorator(apartment);
        console.log(apartment.customizeExperience());
        console.log("End testing...\n\n");
    };
    return Program;
}());
Program.main([]);
