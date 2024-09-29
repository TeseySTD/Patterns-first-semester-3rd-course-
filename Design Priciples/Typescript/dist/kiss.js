{
    var SimpleHouse_1 = /** @class */ (function () {
        function SimpleHouse(Address, Value) {
            this.Address = Address;
            this.Value = Value;
        }
        SimpleHouse.prototype.DisplayDetails = function () {
            console.log("House at ".concat(this.Address, " valued at ").concat(this.Value));
        };
        return SimpleHouse;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var house = new SimpleHouse_1("123 Main St", 200000);
            house.DisplayDetails();
        };
        return Program;
    }());
    Program.Main();
}
