{
    var RealEstate_1 = /** @class */ (function () {
        function RealEstate(address, value) {
            this.address = address;
            this.value = value;
        }
        return RealEstate;
    }());
    var RealEstateReport_1 = /** @class */ (function () {
        function RealEstateReport() {
        }
        RealEstateReport.prototype.printReport = function (property) {
            console.log("Property at: ".concat(property.address, ", valued at: ").concat(property.value));
        };
        return RealEstateReport;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.main = function () {
            var property = new RealEstate_1("123 Main St", 200000);
            var report = new RealEstateReport_1();
            report.printReport(property);
        };
        return Program;
    }());
    Program.main();
}
