{
    var Client_1 = /** @class */ (function () {
        function Client(name) {
            this._estates = [];
            this.name = name;
        }
        Client.prototype.addEstate = function (property) {
            this._estates.push(property);
        };
        Client.prototype.displayProperties = function () {
            var _this = this;
            this._estates.forEach(function (property) {
                console.log("".concat(_this.name, "'s estate at: ").concat(property.address, ", price : ").concat(property.price));
            });
        };
        return Client;
    }());
    var RealEstate_1 = /** @class */ (function () {
        function RealEstate(address, value) {
            this.address = address;
            this.price = value;
        }
        return RealEstate;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.main = function () {
            var client = new Client_1("Ivan Ivanov");
            client.addEstate(new RealEstate_1("123 Main St", 250000));
            client.displayProperties();
        };
        return Program;
    }());
    Program.main();
}
