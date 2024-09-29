"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTemplate = void 0;
var AbstractTemplate = /** @class */ (function () {
    function AbstractTemplate() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._params = args;
    }
    Object.defineProperty(AbstractTemplate.prototype, "Params", {
        get: function () {
            return this._params;
        },
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true
    });
    AbstractTemplate.prototype.execute = function () {
        if (this.Params.length === 0)
            return this.addEmpty();
        else
            return this.addEstate();
    };
    AbstractTemplate.prototype.returnError = function () {
        return "Failed to add new Estate with args: " + this.Params.join(",");
    };
    return AbstractTemplate;
}());
exports.AbstractTemplate = AbstractTemplate;
