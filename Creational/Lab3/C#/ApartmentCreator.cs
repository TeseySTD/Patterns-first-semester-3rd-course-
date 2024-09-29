namespace C_;

public class ApartmentCreator :RealEstateCreator
{
    public override IRentableAndSellable CreateEstate()
    {
        return new Apartment();
    }
}
