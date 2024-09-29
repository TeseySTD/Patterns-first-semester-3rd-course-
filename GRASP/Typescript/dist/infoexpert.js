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
            client.AddEstate(new House_1(100000));
            client.AddEstate(new Apartment_1(75000));
            client.AddEstate(new Room_1(20000));
            console.log("Total cost of all estates: ".concat(client.GetTotalValue(), " usd."));
        };
        return Program;
    }());
    var Client_1 = /** @class */ (function () {
        function Client() {
            this._estates = [];
        }
        Client.prototype.GetTotalValue = function () {
            return this._estates.reduce(function (sum, p) { return sum + p.Value; }, 0);
        };
        Client.prototype.AddEstate = function (estate) {
            this._estates.push(estate);
        };
        return Client;
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
    var Room_1 = /** @class */ (function (_super) {
        __extends(Room, _super);
        function Room(value) {
            var _this = _super.call(this) || this;
            _this.Value = value;
            return _this;
        }
        return Room;
    }(RealEstate));
    Program.Main();
}
