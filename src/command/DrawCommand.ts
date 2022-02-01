import {Pen} from "../pen";
import Command from "./Command";
import {GraphType, ModelData} from "../const";
import {log} from "../common/utils";

export class CommandPenDown extends Command {

    private type: GraphType
    protected pen: Pen

    constructor(pen: Pen, type: GraphType) {
        super();
        this.type = type
        this.pen = pen
    }

    execute() {

        this.snapshot = this.pen.getModelList().slice()
        CommandPenUP.commandsQueue.enqueue(this)

        this.pen.penDown(this.type);
        return this.pen
    }

    undo(): void {
        const cmd = CommandPenDown.commandsQueue.dequeue()
        if (cmd) {
            this.pen.setModelList(cmd.snapshot)
        }
    }
}

export class CommandPenUP extends Command {
    // private type: GraphType
    protected pen: Pen
    protected event: MouseEvent

    constructor(pen: Pen, event: MouseEvent) {
        super();
        this.pen = pen
        this.event = event
    }

    execute() {
        this.pen.penUp(this.event)
        return this.pen
    }

    undo(): void {


    }
}

export class CommandPenMove extends Command {
    private type: GraphType
    protected pen: Pen
    protected event: MouseEvent

    constructor(pen: Pen, event: MouseEvent, type: GraphType) {
        super()
        this.type = type
        this.event = event
        this.pen = pen
    }

    execute() {
        this.pen.move(this.event, this.type)
    }

    undo(): void {
    }
}
