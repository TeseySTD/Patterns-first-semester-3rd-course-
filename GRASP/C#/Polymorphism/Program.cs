
namespace C_
{
    public class Program
    {
        public static void Main(string[] args)
        {
            List<RealEstate> estates = new List<RealEstate>
            {
                new House(170000),
                new Apartment(90000),
                new Room(25000)
            };

            foreach (var estate in estates)
            {
                Console.WriteLine(estate);
            }
        }
    }

    public abstract class RealEstate
    {
        public decimal Value { get; protected set; }

        public override string ToString()
        {
            return $"Estate: {GetType().Name}, Price: {Value} usd.";
        }
    }

    public class House : RealEstate
    {
        public House(decimal value)
        {
            Value = value;
        }
    }

    public class Apartment : RealEstate
    {
        public Apartment(decimal value)
        {
            Value = value;
        }
    }

    public class Room : RealEstate
    {
        public Room(decimal value)
        {
            Value = value;
        }
    }
}
