namespace C_;

public abstract class RealEstateCreator
{
    public abstract IRentableAndSellable CreateEstate();

    public void RentEstate(Customer customer, DateTime startDate, DateTime endDate){
        var estate = CreateEstate();
        estate.Rent(customer, startDate, endDate);
    }

    public void SellEstate(Customer customer){
        var estate = CreateEstate();
        estate.Sell(customer);
    }
}
