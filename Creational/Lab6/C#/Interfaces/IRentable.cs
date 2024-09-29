using System.Diagnostics.Contracts;
using System.Globalization;

namespace C_;

public interface IRentable
{
    public void Rent(Customer customer, DateTime startDate, DateTime endDate);
}
