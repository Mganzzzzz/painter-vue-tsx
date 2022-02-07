import {ModelBase} from "../model";
import CommandQueue from "./CommandQueue";

export default abstract class Command {
    static commandsQueue = new CommandQueue()
    private static _id = 0

    public readonly id

    abstract execute(): void

    abstract undo(): void

    abstract redo(): void

    constructor() {
        this.id = Command._id
        Command._id++
    }
}
