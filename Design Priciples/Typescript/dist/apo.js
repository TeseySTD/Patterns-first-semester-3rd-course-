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
            _this.address = address;
            _this.value = value;
            _this.bedrooms = bedrooms;
            _this.bathrooms = bathrooms;
            return _this;
        }
        House.prototype.displayDetails = function () {
            console.log("House at ".concat(this.address, " with ").concat(this.bedrooms, " bedrooms and ").concat(this.bathrooms, " bathrooms, valued at ").concat(this.value));
        };
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment(address, value, floor) {
            var _this = _super.call(this) || this;
            _this.address = address;
            _this.value = value;
            _this.floor = floor;
            return _this;
        }
        Apartment.prototype.displayDetails = function () {
            console.log("Apartment at ".concat(this.address, " on floor ").concat(this.floor, ", valued at ").concat(this.value));
        };
        return Apartment;
    }(RealEstate));
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.main = function () {
            var list = [];
            for (var i = 0; i < 100; i++) {
                list.push(new House_1("House ".concat(i), 250000, 3, 2));
                list.push(new Apartment_1("Apartment ".concat(i), 150000, 5));
            }
            list.forEach(function (estate) { return estate.displayDetails(); });
        };
        return Program;
    }());
    Program.main();
}
