
import { AbstractStrategy } from './Strategies/abstract_strategy';
import { AddApartmentStrategy } from './Strategies/add_apartment_strategy';
import { AddHouseStrategy } from './Strategies/add_house_strategy';
import { AddRoomStrategy } from './Strategies/add_room_strategy';
class Program {
    private static _addStrategy : AbstractStrategy
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        [   new AddApartmentStrategy(),
            new AddHouseStrategy("house", "house", "1", "1", "test"),
            new AddRoomStrategy(),]
        .forEach((strategy: AbstractStrategy) => {
            this._addStrategy = strategy;
            this.executeCommands();
        });
        console.log("End testing... \n\n");
    }

    private static executeCommands(): void {
        console.log(this._addStrategy.execute());
    }
}

Program.main([]);