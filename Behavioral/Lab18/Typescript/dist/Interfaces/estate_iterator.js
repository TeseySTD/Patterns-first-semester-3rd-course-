"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEstateIterator = void 0;
class IteratorMemento {
    constructor(position) {
        this.position = position;
    }
}
class IEstateIterator {
    constructor(_collection, _reverse = false) {
        this._collection = _collection;
        this._reverse = _reverse;
        this._position = 0;
        if (_reverse) {
            this._position = _collection.length - 1;
        }
    }
    next() {
        if (this._position >= 0 && this._position < this._collection.length) {
            const oldPosition = this._position;
            this._position = this._position + (this._reverse ? -1 : 1);
            return {
                done: false,
                value: this._collection[oldPosition],
            };
        }
        else {
            this._position = this._reverse ? this._collection.length - 1 : 0;
            return {
                done: true,
                value: null,
            };
        }
    }
    changeDirection(direction) {
        this._position = direction ? this._collection.length - 1 : 0;
        this._reverse = direction;
    }
    saveState() {
        return new IteratorMemento(this._position);
    }
    restoreState(memento) {
        this._position = memento.position;
    }
    [Symbol.iterator]() {
        return this;
    }
}
exports.IEstateIterator = IEstateIterator;
