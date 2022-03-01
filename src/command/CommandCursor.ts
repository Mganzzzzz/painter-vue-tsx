import Command from "./Command";
import {GraphType, ModelCursorPenData} from "../const";
import {ModelBase} from "../model";
import CommandDraw from "./CommandDraw";

export default class CommandCursor extends CommandDraw {

    // constructor(pen: CursorPen, event: MouseEvent, type: GraphType) {
    //     super(pen, event, type);
    //     this.event = event
    //     this.pen = pen
    //     this.type = type
    // }

    move() {
        this.pen.move(this.event, this.type);
    }

    execute(): void {
        // CommandCursor.commandsQueue.enqueue(this)
    }

    redo(): void {
        // this.pen.setModelList(this.snapshotAfterExec)
    }

    undo(): void {
        // this.pen.setModelList(this.snapshotBeforeExec)
    }

    getData(): ModelCursorPenData {
        return this.event
    }

    getModle(): ModelCursorPenData {
        return this.event
    }

}
