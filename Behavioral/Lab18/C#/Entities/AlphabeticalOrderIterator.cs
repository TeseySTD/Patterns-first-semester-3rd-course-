using System;
using System.Collections.Generic;
using C_.Interfaces;

namespace C_.Entities
{
    public class IteratorMemento
    {
        public int Position { get; }

        public IteratorMemento(int position)
        {
            Position = position;
        }
    }

    public class AlphabeticalOrderIterator : IEstateIterator
    {
        private List<RealEstate> _collection;
        private int _position = -1;
        private bool _reverse = false;

        public AlphabeticalOrderIterator(List<RealEstate> collection, bool reverse = false)
        {
            this._collection = collection;
            this._reverse = reverse;

            if (reverse)
            {
                this._position = collection.Count;
            }
        }

        public override object Current()
        {
            return this._collection[_position];
        }

        public override int Key()
        {
            return this._position;
        }

        public override bool MoveNext()
        {
            int updatedPosition = this._position + (this._reverse ? -1 : 1);

            if (updatedPosition >= 0 && updatedPosition < this._collection.Count)
            {
                this._position = updatedPosition;
                return true;
            }
            else
            {
                return false;
            }
        }

        public override void Reset()
        {
            this._position = this._reverse ? this._collection.Count - 1 : 0;
        }

        public IteratorMemento SaveState()
        {
            return new IteratorMemento(this._position);
        }

        public void RestoreState(IteratorMemento memento)
        {
            this._position = memento.Position;
        }
    }
}
