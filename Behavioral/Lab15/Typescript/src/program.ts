
import { AddApartmentCommand } from './Commands/add_apartment_command';
import { AddHouseCommand } from './Commands/add_house_command';
import { AddRoomCommand } from './Commands/add_room_command';
import { RemoveEstateCommand } from './Commands/remove_estate_command';
import { ICommand } from './Interfaces/command';
class Program {
    static main(args: string[]): void {
        console.log("Start testing... \n\n");
        Program.executeCommands([
            new AddApartmentCommand(),
            new AddHouseCommand("house", "house", "1", "1", "test"),
            new AddRoomCommand(),
            new RemoveEstateCommand("apartment", "0"),
            new RemoveEstateCommand("house", "2"),
            new RemoveEstateCommand("house", "1"),
        ]);
        console.log("End testing... \n\n");
    }

    private static executeCommands(commands:ICommand[]): void {
        commands.forEach(command => console.log(command.execute()));
    }
}

Program.main([]);