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
        Program.Main = function (args) {
            var realtor = new Realtor_1();
            var client = new Client_1();
            var controller = new RealEstateController_1(realtor, client);
            controller.AddNewHouseToClient(130000);
            controller.AddNewApartmentToClient(70000);
            console.log("Total cost of all estates: ".concat(controller.GetClientPropertyTotalValue(), " \u0433\u0440\u043D."));
        };
        return Program;
    }());
    var RealEstateController_1 = /** @class */ (function () {
        function RealEstateController(realtor, client) {
            this.realtor = realtor;
            this.client = client;
        }
        RealEstateController.prototype.AddNewHouseToClient = function (value) {
            var house = this.realtor.CreateHouse(value);
            this.client.AddEstate(house);
        };
        RealEstateController.prototype.AddNewApartmentToClient = function (value) {
            var apartment = this.realtor.CreateApartment(value);
            this.client.AddEstate(apartment);
        };
        RealEstateController.prototype.GetClientPropertyTotalValue = function () {
            return this.client.GetTotalValue();
        };
        return RealEstateController;
    }());
    var Client_1 = /** @class */ (function () {
        function Client() {
            this.estates = [];
        }
        Client.prototype.AddEstate = function (property) {
            this.estates.push(property);
        };
        Client.prototype.GetTotalValue = function () {
            return this.estates.reduce(function (prev, current) { return prev + current.Value; }, 0);
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
        function RealEstate() {
        }
        return RealEstate;
    }());
    var House_1 = /** @class */ (function (_super) {
        __extends(House, _super);
        function House(value) {
            var _this = _super.call(this) || this;
            _this.Value = value;
            return _this;
        }
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment(value) {
            var _this = _super.call(this) || this;
            _this.Value = value;
            return _this;
        }
        return Apartment;
    }(RealEstate));
    Program.Main([]);
}
