import Command from "./Command";
import {ModelBase} from "../model";

export default class CommandQueue {
    private arr: Command[] = []
    private idx: number = -1

    clear() {
        this.idx = -1
        this.arr = []
    }

    top(): Command {
        return this.arr[this.idx]
    }

    size() {
        return this.idx
    }

    requeue(): Command | undefined {
        const ret = this.arr[this.idx + 1]
        if (ret) {
            this.idx++
        }
        return ret
    }

    dequeue(): Command | undefined {
        const ret = this.arr[this.idx]
        if (ret) {
            this.idx--
        }
        return ret
    }

    enqueue(command: Command) {
        if (this.idx !== this.arr.length - 1 && this.idx !== -1) {
            this.arr = this.arr.slice(0, this.idx + 1)
        }
        this.arr.push(command)
        this.idx++
    }
}
