var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var client = new Client_1();
            var mediator = new RealEstateMediator_1(client);
            mediator.CreateHouse(120000);
            mediator.CreateApartment(80000);
            console.log("Total cost: ".concat(client.GetTotalValue(), " usd."));
        };
        return Program;
    }());
    var RealEstateMediator_1 = /** @class */ (function () {
        function RealEstateMediator(client) {
            this.realtor = new Realtor_1();
            this.client = client;
        }
        RealEstateMediator.prototype.CreateHouse = function (value) {
            this.client.AddEstate(this.realtor.CreateHouse(value));
        };
        RealEstateMediator.prototype.CreateApartment = function (value) {
            this.client.AddEstate(this.realtor.CreateApartment(value));
        };
        return RealEstateMediator;
    }());
    var Client_1 = /** @class */ (function () {
        function Client() {
            this.properties = [];
        }
        Client.prototype.AddEstate = function (property) {
            this.properties.push(property);
        };
        Client.prototype.GetTotalValue = function () {
            return this.properties.reduce(function (total, property) { return total + property.Value; }, 0);
        };
        return Client;
    }());
    var Realtor_1 = /** @class */ (function () {
        function Realtor() {
        }
        Realtor.prototype.CreateHouse = function (value) {
            return new House_1(value);
        };
        Realtor.prototype.CreateApartment = function (value) {
            return new Apartment_1(value);
        };
        return Realtor;
    }());
    var RealEstate = /** @class */ (function () {
        function RealEstate(value) {
            this.Value = value;
        }
        return RealEstate;
    }());
    var House_1 = /** @class */ (function (_super) {
        __extends(House, _super);
        function House(value) {
            return _super.call(this, value) || this;
        }
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment(value) {
            return _super.call(this, value) || this;
        }
        return Apartment;
    }(RealEstate));
    Program.Main();
}
