"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_apartment_command_1 = require("./Commands/add_apartment_command");
var add_house_command_1 = require("./Commands/add_house_command");
var add_room_command_1 = require("./Commands/add_room_command");
var remove_estate_command_1 = require("./Commands/remove_estate_command");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        Program.executeCommands([
            new add_apartment_command_1.AddApartmentCommand(),
            new add_house_command_1.AddHouseCommand("house", "house", "1", "1", "test"),
            new add_room_command_1.AddRoomCommand(),
            new remove_estate_command_1.RemoveEstateCommand("apartment", "0"),
            new remove_estate_command_1.RemoveEstateCommand("house", "2"),
            new remove_estate_command_1.RemoveEstateCommand("house", "1"),
        ]);
        console.log("End testing... \n\n");
    };
    Program.executeCommands = function (commands) {
        commands.forEach(function (command) { return console.log(command.execute()); });
    };
    return Program;
}());
Program.main([]);
