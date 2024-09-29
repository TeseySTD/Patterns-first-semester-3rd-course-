"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateFlyweightFactory = void 0;
var RealEstateFlyweightFactory = /** @class */ (function () {
    function RealEstateFlyweightFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        this.flyweights = {};
        args.forEach(function (elem) {
            _this.flyweights[_this.getKey(elem)] = elem;
        });
    }
    RealEstateFlyweightFactory.prototype.getKey = function (key) {
        var elements = [
            key.furnished.toString(),
            key.parking.toString(),
            key.balcony.toString(),
            key.elevator.toString(),
            key.airConditioning.toString(),
            key.isUtilitiesIncluded.toString()
        ];
        return elements.join('_');
    };
    RealEstateFlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!this.flyweights.hasOwnProperty(key)) {
            console.log('RealEstateFlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = sharedState;
        }
        else {
            console.log('FRealEstateFlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    };
    return RealEstateFlyweightFactory;
}());
exports.RealEstateFlyweightFactory = RealEstateFlyweightFactory;
