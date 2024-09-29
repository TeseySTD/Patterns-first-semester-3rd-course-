"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractStrategy = void 0;
var AbstractStrategy = /** @class */ (function () {
    function AbstractStrategy() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._params = args;
    }
    Object.defineProperty(AbstractStrategy.prototype, "Params", {
        get: function () {
            return this._params;
        },
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractStrategy;
}());
exports.AbstractStrategy = AbstractStrategy;
