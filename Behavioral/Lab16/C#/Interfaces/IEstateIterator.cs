using System;
using System.Collections;
using System.Text;

namespace C_.Interfaces
{
    public abstract class IEstateIterator : IEnumerator
    {
        object IEnumerator.Current => Current();
    
        // Returns the key of the current element
        public abstract int Key();
        
        // Returns the current element
        public abstract object Current();
        
        // Move forward to next element
        public abstract bool MoveNext();
            // Rewinds the Iterator to the first element
        public abstract void Reset();
    }
}
