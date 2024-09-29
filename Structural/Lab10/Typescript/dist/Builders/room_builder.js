"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBuilder = void 0;
var estate_builder_1 = require("./estate_builder");
var room_1 = require("../Entities/room");
var RoomBuilder = /** @class */ (function (_super) {
    __extends(RoomBuilder, _super);
    function RoomBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoomBuilder.prototype.reset = function () {
        this._estate = new room_1.Room();
    };
    RoomBuilder.prototype.setNeighbors = function (goodOrBad) {
        if (goodOrBad === void 0) { goodOrBad = false; }
        var a = this._estate;
        a.isGoodNeighbors = goodOrBad;
        return this;
    };
    RoomBuilder.prototype.setHeatingType = function (type) {
        var a = this._estate;
        a.heatingType = type;
        return this;
    };
    return RoomBuilder;
}(estate_builder_1.EstateBuilder));
exports.RoomBuilder = RoomBuilder;
