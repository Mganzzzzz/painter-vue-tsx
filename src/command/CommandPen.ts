import {ModelBase} from "../model";
import CommandQueue from "./CommandQueue";
import Command from "./Command";


export default abstract class CommandPen extends Command {
    static commandsQueue = new CommandQueue()
    protected snapshot: ModelBase[] = []

    abstract execute(): void

    abstract undo(): void
}
