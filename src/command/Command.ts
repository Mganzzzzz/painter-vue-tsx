import {ModelBase} from "../model";
import CommandQueue from "./CommandQueue";

export default abstract class Command {
    static commandsQueue = new CommandQueue()
    public snapshot: ModelBase[] = []

    abstract execute(): void

    abstract undo(): void
}
