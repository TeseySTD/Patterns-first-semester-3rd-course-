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
            var repository = new RealEstateRepository_1();
            client.addProperty(new House_1(150000));
            client.addProperty(new Apartment_1(85000));
            repository.saveClientEstates(client);
            console.log("Estates of client stored in database");
        };
        return Program;
    }());
    var Client_1 = /** @class */ (function () {
        function Client() {
            this._properties = [];
        }
        Client.prototype.addProperty = function (property) {
            this._properties.push(property);
        };
        Client.prototype.getProperties = function () {
            return this._properties;
        };
        return Client;
    }());
    var RealEstateRepository_1 = /** @class */ (function () {
        function RealEstateRepository() {
        }
        RealEstateRepository.prototype.saveClientEstates = function (client) {
            for (var _i = 0, _a = client.getProperties(); _i < _a.length; _i++) {
                var property = _a[_i];
                console.log("Stored: ".concat(property.constructor.name, " price ").concat(property.getValue(), " usd."));
            }
        };
        return RealEstateRepository;
    }());
    var RealEstate = /** @class */ (function () {
        function RealEstate() {
        }
        RealEstate.prototype.getValue = function () {
            return this.value;
        };
        return RealEstate;
    }());
    var House_1 = /** @class */ (function (_super) {
        __extends(House, _super);
        function House(value) {
            var _this = _super.call(this) || this;
            _this.value = value;
            return _this;
        }
        return House;
    }(RealEstate));
    var Apartment_1 = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment(value) {
            var _this = _super.call(this) || this;
            _this.value = value;
            return _this;
        }
        return Apartment;
    }(RealEstate));
    Program.Main();
}
