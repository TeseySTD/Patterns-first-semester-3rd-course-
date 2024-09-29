import { Customer } from '../Entities/customer';
export interface IRentable {
    rent(customer: Customer, startDate: Date, endDate: Date): void;
}
