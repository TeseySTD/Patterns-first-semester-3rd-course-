export class IEstateIterator<T> implements IterableIterator<T>
{
    private _position = 0;

    constructor(
        public _collection: T[],
        public _reverse: boolean = false
    ) {
        if(_reverse) {
            this._position = _collection.length - 1;
        }
    }
    public next(): IteratorResult<T> {
        if (this._position >= 0 && this._position < this._collection.length)
        {
            const oldPosition = this._position;
            this._position = this._position + (this._reverse ? -1 : 1);
            return {
                done: false,
                value: this._collection[oldPosition],
            };
        }
        else
        {
            this._position = 0;
            return {
                done: true,
                value: null,
            };
        }
    }

    public changeDirection(direction:boolean){
        this._position = direction ? this._collection.length - 1 : 0;
        this._reverse = direction;
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }
}

