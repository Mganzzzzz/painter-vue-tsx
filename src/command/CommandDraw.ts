import Command from "./Command";
import {Pen} from "../pen";
import {GraphType} from "../const";
import {ModelBase} from "../model";

export default class CommandDraw extends Command {

    private type: GraphType
    private pen: Pen
    private event: MouseEvent

    private _snapshotBeforeExec: ModelBase[] = []
    private _snapshotAfterExec: ModelBase[] = []

    get snapshotBeforeExec(): ModelBase[] {
        return this._snapshotBeforeExec;
    }

    get snapshotAfterExec(): ModelBase[] {
        return this._snapshotAfterExec;
    }

    constructor(pen: Pen, event: MouseEvent, type: GraphType) {
        super();
        this.pen = pen
        this.event = event
        this.type = type
    }


    execute(): void {
        CommandDraw.commandsQueue.enqueue(this)
    }

    redo(): void {
        this.pen.setModelList(this.snapshotAfterExec)
    }

    undo(): void {
        this.pen.setModelList(this.snapshotBeforeExec)
    }

    startDraw() {
        this._snapshotBeforeExec = this.pen.getModelList().slice()
        this.pen.penDown(this.type);
        this.execute()
    }

    stopDraw() {
        this.pen.penUp(this.event)
        this._snapshotAfterExec = this.pen.getModelList().slice()
    }

    drawing(e: MouseEvent) {
        this.event = e
        this.pen.move(this.event, this.type)
    }
}
