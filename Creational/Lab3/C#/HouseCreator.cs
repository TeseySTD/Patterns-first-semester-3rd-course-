namespace C_;

public class HouseCreator : RealEstateCreator
{
    public override IRentableAndSellable CreateEstate()
    {
        return new House();
    }
}
