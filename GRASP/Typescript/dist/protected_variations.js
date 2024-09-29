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
            var factory = new RealEstateFactory_1();
            var house = factory.CreateEstate("House", 180000);
            var apartment = factory.CreateEstate("Apartment", 95000);
            console.log("House with price ".concat(house.Value, " usd."));
            console.log("Apartment with price ".concat(apartment.Value, " usd."));
        };
        return Program;
    }());
    var RealEstateFactory_1 = /** @class */ (function () {
        function RealEstateFactory() {
        }
        RealEstateFactory.prototype.CreateEstate = function (type, value) {
            switch (type) {
                case "House":
                    return new House_1(value);
                case "Apartment":
                    return new Apartment_1(value);
                case "Room":
                    return new Room_1(value);
                default:
                    throw new Error("Unknown estate type.");
            }
        };
        return RealEstateFactory;
    }());
    var RealEstate = /** @class */ (function () {
        function RealEstate(Value) {
            this.Value = Value;
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
    var Room_1 = /** @class */ (function (_super) {
        __extends(Room, _super);
        function Room(value) {
            return _super.call(this, value) || this;
        }
        return Room;
    }(RealEstate));
    Program.Main();
}
