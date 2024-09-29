"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./Entities/customer");
var apartment_builder_1 = require("./Builders/apartment_builder");
var price_adapter_1 = require("./price_adapter");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (args) {
        console.log("Start testing... \n\n");
        var customer = new customer_1.Customer();
        var apartmentBuilder = new apartment_builder_1.ApartmentBuilder();
        var apartment = apartmentBuilder.setBalcony().setParking().setAddress("XZ").getEstate();
        var adapter = new price_adapter_1.PriceAdapter(apartment);
        var price = 300000;
        console.log("Sell apartment with price: ".concat(price, " UAH"));
        customer.setToBuy(adapter, price);
    };
    return Program;
}());
Program.main([]);
