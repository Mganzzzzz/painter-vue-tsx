import {GraphType, PenInfo} from "./const";
import {Pen} from "./pen";
import CommandCursor from "./command/CommandCursor";

interface CommandOption {
    x: number,
    y: number,
    type: GraphType
}

export class CursorPen extends Pen {


    private playSpeed = 1000

    private isEnd: boolean
    private graphType: GraphType
    private command: CommandCursor | null
    private commandList: CommandOption[] = []
    private commandIndex = -1
    private _loop = false

    constructor() {
        super()
        this.isEnd = false
        this.command = null
        this.commandIndex = 0
        this.graphType = GraphType.line
    }


    set loop(value: boolean) {
        this._loop = value;
    }

    init() {
        this.commandList = [
            {x: 30, y: 30, type: this.graphType},
            {x: 200, y: 200, type: this.graphType},
            {x: 400, y: 200, type: this.graphType},
            {x: 30, y: 30, type: this.graphType},
        ]
    }


    moveTo() {
        if (this.commandList.length === this.commandIndex) {
            this.isEnd = true
        } else {
            this.commandIndex++
        }
    }

    genCmd() {
        const op = this.commandList[this.commandIndex]
        let e = new MouseEvent('move', {
            clientX: op.x,
            clientY: op.y,
        });
        const cmd = new CommandCursor(this, e, this.graphType)
        this.commandIndex++
        if (this.commandList.length === this.commandIndex) {
            this.isEnd = true
        }
        return cmd
    }


    play(updater: (d: PenInfo) => void) {
        const cmd = this.genCmd()
        this.showPen()
        let info = this.getPenInfo()
        updater(info)
        cmd.move()
        info = this.getPenInfo()
        updater(info)
        const _play = (executer: (d: PenInfo) => void) => {

            setTimeout(() => {
                if (this.isEnd) {
                    if (this._loop) {
                        this.commandIndex = 0
                        this.isEnd = false
                    }
                    this.hidePen()
                    const info = this.getPenInfo()
                    updater(info)
                    this.cleanAll()
                    return
                }

                const cmd = this.genCmd()
                cmd.startDraw()
                cmd.move()
                cmd.stopDraw()
                const info = this.getPenInfo()
                updater(info)

                _play(updater)
            }, this.playSpeed)

        }
        _play(updater)
    }
}
