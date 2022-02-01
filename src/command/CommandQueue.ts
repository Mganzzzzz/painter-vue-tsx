import Command from "./Command";

export default class CommandQueue {
    private arr: Command[] = []
    private idx: number = -1

    top(): Command {
        return this.arr[this.idx]
    }

    size() {
        return this.idx
    }

    dequeue(): Command | undefined {
        if (this.idx > 0) {
            const top = this.top()
            this.idx--
            return top
        } else  {
            return this.arr[0]
        }
    }

    enqueue(command: Command) {
        if(this.idx !== this.arr.length - 1 && this.idx !== -1) {
            this.arr = this.arr.slice(0, this.idx + 1)
        }
        this.arr.push(command)
        this.idx++
    }

}
