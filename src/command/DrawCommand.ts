import {Pen} from "../pen";
import CommandPen from "./CommandPen";
import {GraphType, ModelData} from "../const";

export class CommandPenDown extends CommandPen {

    private type: GraphType
    protected pen: Pen

    constructor(pen: Pen, type: GraphType) {
        super();
        this.type = type
        this.pen = pen
    }

    execute() {
        this.pen.penDown(this.type);
        this.snapshot = this.pen.getModelList()
        CommandPenDown.commandsQueue.enqueue(this)
        return this.pen
    }

    undo(): void {
        CommandPenDown.commandsQueue.dequeue()
        // this.pen.penUp()
    }
}

export class CommandPenUP extends CommandPen {
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
        this.snapshot = this.pen.getModelList()
        CommandPenUP.commandsQueue.enqueue(this)
        return this.pen
    }

    undo(): void {
        CommandPenDown.commandsQueue.dequeue()
        // this.pen.penDown()
    }
}

export class CommandPenMove extends CommandPen {
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
        this.snapshot = this.pen.getModelList()
        CommandPenMove.commandsQueue.enqueue(this)
    }

    undo(): void {
        CommandPenDown.commandsQueue.dequeue()
    }
}
