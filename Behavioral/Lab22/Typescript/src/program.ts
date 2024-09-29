
import { AbstractTemplate } from './TemplateMethods/abstract_template';
import { AddApartmentTemplate } from './TemplateMethods/add_apartment_template';
import { AddHouseStrategy } from './TemplateMethods/add_house_template';
import { AddRoomStrategy } from './TemplateMethods/add_room_template';
class Program {
    private static _addStrategy : AbstractTemplate
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        [   new AddApartmentTemplate(),
            new AddRoomStrategy("room", "room", "1", "1", "test"),
            new AddHouseStrategy("house", "house", "1", "1", "test"),
            new AddHouseStrategy("house", "house", "1", "1",),
            new AddRoomStrategy("error"),]
        .forEach((strategy: AbstractTemplate) => {
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