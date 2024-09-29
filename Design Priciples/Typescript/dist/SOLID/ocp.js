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
    var RealEstate = /** @class */ (function () {
        function RealEstate() {
        }
        return RealEstate;
    }());
    var House_1 = /** @class */ (function (_super) {
        __extends(House, _super);
        function House() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        House.prototype.getPrice = function () {
            return 300000;
        };
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Apartment.prototype.getPrice = function () {
            return 150000;
        };
        return Apartment;
    }(RealEstate));
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var house = new House_1();
            var apartment = new Apartment_1();
            console.log("Price of the house: ".concat(house.getPrice()));
            console.log("Price of the apartment: ".concat(apartment.getPrice()));
        };
        return Program;
    }());
    Program.Main();
}
