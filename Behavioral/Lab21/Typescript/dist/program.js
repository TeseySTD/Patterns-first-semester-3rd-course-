"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_apartment_strategy_1 = require("./Strategies/add_apartment_strategy");
var add_house_strategy_1 = require("./Strategies/add_house_strategy");
var add_room_strategy_1 = require("./Strategies/add_room_strategy");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        var _this = this;
        console.log("Start testing... \n\n");
        [new add_apartment_strategy_1.AddApartmentStrategy(),
            new add_house_strategy_1.AddHouseStrategy("house", "house", "1", "1", "test"),
            new add_room_strategy_1.AddRoomStrategy(),]
            .forEach(function (strategy) {
            _this._addStrategy = strategy;
            _this.executeCommands();
        });
        console.log("End testing... \n\n");
    };
    Program.executeCommands = function () {
        console.log(this._addStrategy.execute());
    };
    return Program;
}());
Program.main([]);
