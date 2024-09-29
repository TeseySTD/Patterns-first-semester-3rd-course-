{
    var HouseService_1 = /** @class */ (function () {
        function HouseService() {
        }
        HouseService.prototype.getValue = function () {
            return 250000;
        };
        return HouseService;
    }());
    var RealEstateManager_1 = /** @class */ (function () {
        function RealEstateManager(realEstateService) {
            this.realEstateService = realEstateService;
        }
        RealEstateManager.prototype.displayPropertyValue = function () {
            console.log("Estate Value: ".concat(this.realEstateService.getValue()));
        };
        return RealEstateManager;
    }());
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var houseService = new HouseService_1();
            var manager = new RealEstateManager_1(houseService);
            manager.displayPropertyValue();
        };
        return Program;
    }());
    Program.Main();
}
