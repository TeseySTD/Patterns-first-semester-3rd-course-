namespace C_;

public class RoomCreator :RealEstateCreator
{
    public override IRentableAndSellable CreateEstate()
    {
        return new Room();
    }
}
