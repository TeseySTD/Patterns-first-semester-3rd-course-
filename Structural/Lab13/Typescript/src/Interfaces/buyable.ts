import { Customer } from '../Entities/customer';
export interface IBuyable {
    setEstateToBuy(customer: Customer, price: number): void;
}