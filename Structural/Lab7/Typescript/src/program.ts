import { Customer } from './Entities/customer';
import { ApartmentBuilder } from './Builders/apartment_builder';
import { PriceAdapter } from './price_adapter';

class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        const customer = new Customer();
        const apartmentBuilder = new ApartmentBuilder();
        const apartment = apartmentBuilder.setBalcony().setParking().setAddress("XZ").getEstate();
        const adapter = new PriceAdapter(apartment);
        const price = 300000;
        console.log(`Sell apartment with price: ${price} UAH`);
        customer.setToBuy(adapter, price);
    }
}

Program.main([]);