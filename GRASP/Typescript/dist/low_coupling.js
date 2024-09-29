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
            var houseService = new HouseService_1();
            var apartmentService = new ApartmentService_1();
            var house = houseService.createEstate(140000);
            var apartment = apartmentService.createEstate(60000);
            console.log("House: ".concat(house.value, " usd."));
            console.log("Apartment: ".concat(apartment.value, " usd."));
        };
        return Program;
    }());
    var HouseService_1 = /** @class */ (function () {
        function HouseService() {
        }
        HouseService.prototype.createEstate = function (value) {
            return new House_1(value);
        };
        return HouseService;
    }());
    var ApartmentService_1 = /** @class */ (function () {
        function ApartmentService() {
        }
        ApartmentService.prototype.createEstate = function (value) {
            return new Apartment_1(value);
        };
        return ApartmentService;
    }());
    var RealEstate = /** @class */ (function () {
        function RealEstate(value) {
            this.value = value;
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
