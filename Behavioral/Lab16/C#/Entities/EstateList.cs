using System;
using System.Collections;
using System.Text;

namespace C_.Entities
{
    public class EstateList : IEnumerable
    {
        private readonly List<RealEstate> _estates = new List<RealEstate>();

        private bool _direction = false;
        
        public void ReverseDirection()
        {
            _direction = !_direction;
        }
        
        public List<RealEstate> getItems()
        {
            return _estates;
        }
        
        public void AddItem(RealEstate item)
        {
            this._estates.Add(item);
        }
        
        public IEnumerator GetEnumerator()
        {
            return new AlphabeticalOrderIterator(this, _direction);
        }

    }
}
