import CommandPen from "./CommandPen";
import Command from "./Command";

export default class CommandQueue {
    private arr: Command[] = []
    private idx: number = 0


    dequeue() {
        if (this.idx > 0) {
            this.idx--
        }
    }

    enqueue(command: Command) {
        this.arr.push(command)
        this.idx++
    }

}
