import {Pen} from "../pen";
import {GraphType, ModelData} from "../const";
// interface CommandPenConstructor {
//     new (hour: number, minute: number): CommandPen;
// }
//
// function createCommandPen(ctor: CommandPenConstructor, hour: number, minute: number): CommandPenConstructor {
//     return new ctor(hour, minute);
// }

export default class CommandPen {
    // commandWithPen(pen: Pen);
    protected pen: Pen
    protected event: Event

    constructor(pen: Pen, event: Event) {
        this.pen = pen
        this.event = event
    }

    static commandWithPen(pen: Pen, event: Event) {
        return new this(pen, event)
    };

    // execute(event: MouseEvent):void;
    // execute(type: GraphType):void;
    // execute(event: MouseEvent, type: GraphType): ModelData[] {
    // }
}
