import { Customer } from '../Entities/customer';
export interface ISellable {
    sell(customer: Customer): void;
}
