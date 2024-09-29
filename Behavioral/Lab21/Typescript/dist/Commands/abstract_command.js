"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCommand = void 0;
var AbstractCommand = /** @class */ (function () {
    function AbstractCommand() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._params = args;
    }
    Object.defineProperty(AbstractCommand.prototype, "Params", {
        get: function () {
            return this._params;
        },
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractCommand;
}());
exports.AbstractCommand = AbstractCommand;
