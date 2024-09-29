{
    var House_1 = /** @class */ (function () {
        function House(address, value) {
            this.address = address;
            this.value = value;
        }
        House.prototype.displayInfo = function () {
            console.log("House at ".concat(this.address, " valued at ").concat(this.value));
        };
        return House;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.main = function () {
            var house = new House_1("123 Main St", 300000);
            house.displayInfo();
        };
        return Program;
    }());
    Program.main();
}
