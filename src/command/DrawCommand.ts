import {Pen} from "../pen";
import CommandPen from "./CommandPen";
import {GraphType, ModelData} from "../const";

export class CommandPenDown extends CommandPen {

    execute(): void {
        this.pen.penDown(this.type)
    }
}

export class CommandPenUP extends CommandPen {
    execute(): void {
        this.pen.penUp(this.event)
    }
}

export class CommandPenMove extends CommandPen {
    execute(): ModelData[] {
        return this.pen.move(this.event, this.type)
    }
}
