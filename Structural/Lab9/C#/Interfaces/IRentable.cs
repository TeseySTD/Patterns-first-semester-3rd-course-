using System.Diagnostics.Contracts;
using System.Globalization;
using C_.Entities;

namespace C_.Interfaces
{
    public interface IRentable
    {
        public void Rent(Customer customer, DateTime startDate, DateTime endDate);
    }
}


