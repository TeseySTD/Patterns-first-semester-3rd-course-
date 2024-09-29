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
        function House(address, value, bedrooms, bathrooms) {
            var _this = _super.call(this) || this;
            _this.Address = address;
            _this.Value = value;
            _this.Bedrooms = bedrooms;
            _this.Bathrooms = bathrooms;
            return _this;
        }
        House.prototype.DisplayDetails = function () {
            console.log("House at ".concat(this.Address, " with ").concat(this.Bedrooms, " bedrooms and ").concat(this.Bathrooms, " bathrooms, valued at ").concat(this.Value));
        };
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment(address, value, floor) {
            var _this = _super.call(this) || this;
            _this.Address = address;
            _this.Value = value;
            _this.Floor = floor;
            return _this;
        }
        Apartment.prototype.DisplayDetails = function () {
            console.log("Apartment at ".concat(this.Address, " on floor ").concat(this.Floor, ", valued at ").concat(this.Value));
        };
        return Apartment;
    }(RealEstate));
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var house = new House_1("123 Main St", 300000, 3, 2);
            var apartment = new Apartment_1("456 Oak St", 150000, 5);
            house.DisplayDetails();
            apartment.DisplayDetails();
        };
        return Program;
    }());
    Program.Main();
}
