using System.Diagnostics.Contracts;
using System.Globalization;

namespace C_;

public interface IRentableAndSellable
{
    public void Rent(Customer customer, DateTime startDate, DateTime endDate);

    public void Sell(Customer customer);
}
