{
    var House_1 = /** @class */ (function () {
        function House() {
        }
        House.prototype.getNumberOfBedrooms = function () {
            return 3;
        };
        return House;
    }());
    var Office_1 = /** @class */ (function () {
        function Office() {
        }
        Office.prototype.getMonthlyRent = function () {
            return 5000;
        };
        return Office;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var house = new House_1();
            var office = new Office_1();
            console.log("Number of bedrooms in house: ".concat(house.getNumberOfBedrooms()));
            console.log("Monthly rent for office: ".concat(office.getMonthlyRent()));
        };
        return Program;
    }());
    Program.Main();
}
