"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_apartment_template_1 = require("./TemplateMethods/add_apartment_template");
var add_house_template_1 = require("./TemplateMethods/add_house_template");
var add_room_template_1 = require("./TemplateMethods/add_room_template");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        var _this = this;
        console.log("Start testing... \n\n");
        [new add_apartment_template_1.AddApartmentTemplate(),
            new add_room_template_1.AddRoomStrategy("room", "room", "1", "1", "test"),
            new add_house_template_1.AddHouseStrategy("house", "house", "1", "1", "test"),
            new add_house_template_1.AddHouseStrategy("house", "house", "1", "1"),
            new add_room_template_1.AddRoomStrategy("error"),]
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
