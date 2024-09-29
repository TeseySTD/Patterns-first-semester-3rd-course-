{
    var EstateHelper_1 = /** @class */ (function () {
        function EstateHelper() {
        }
        EstateHelper.prototype.calculateTotalValue = function (properties) {
            return properties.reduce(function (prev, curr) { return prev + curr.Value; }, 0);
        };
        return EstateHelper;
    }());
    var Client_1 = /** @class */ (function () {
        function Client() {
            this.properties = [];
            this.helper = new EstateHelper_1();
        }
        Client.prototype.addEstate = function (property) {
            this.properties.push(property);
        };
        Client.prototype.getTotalValue = function () {
            return this.helper.calculateTotalValue(this.properties);
        };
        return Client;
    }());
    var RealEstate_1 = /** @class */ (function () {
        function RealEstate(address, value) {
            this.Address = address;
            this.Value = value;
        }
        return RealEstate;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var client = new Client_1();
            client.addEstate(new RealEstate_1("123 Main St", 250000));
            client.addEstate(new RealEstate_1("456 Oak St", 300000));
            console.log("Total value of properties: ".concat(client.getTotalValue()));
        };
        return Program;
    }());
    Program.Main();
}
