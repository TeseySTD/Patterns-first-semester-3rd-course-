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
            var estates = [
                new House_1(170000),
                new Apartment_1(90000),
                new Room_1(25000)
            ];
            estates.forEach(function (estate) { return console.log(estate.toString()); });
        };
        return Program;
    }());
    var RealEstate = /** @class */ (function () {
        function RealEstate(value) {
            this.value = value;
        }
        RealEstate.prototype.toString = function () {
            return "Estate: ".concat(this.constructor.name, ", Price: ").concat(this.value, " usd.");
        };
        return RealEstate;
    }());
    var House_1 = /** @class */ (function (_super) {
        __extends(House, _super);
        function House() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Apartment;
    }(RealEstate));
    var Room_1 = /** @class */ (function (_super) {
        __extends(Room, _super);
        function Room() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Room;
    }(RealEstate));
    Program.Main();
}
