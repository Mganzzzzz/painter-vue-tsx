import {GraphType, ModelData, PenInfo, PenStatus} from "./const";
import * as  Models from "./model";
import {ModelBase, ModelList, PointModel} from "./model";

console.log('debug Models', Models)

export class Pen {
    private type: GraphType = GraphType.base
    private penStatus: PenStatus = PenStatus.up
    private moveEvt!: MouseEvent
    private upEvt!: MouseEvent
    private modelList = new ModelList()
    private currentDrawModel: ModelBase | null = null
    private color: string = '#000000'
    private currentPoint: PointModel | undefined

    setPenType(type: GraphType) {
        this.type = type
    }

    isPenDown(): boolean {
        return this.penStatus === PenStatus.down
    }


    penDown(type: GraphType): void {
        this.type = type
        if (this.penStatus === PenStatus.up) {
            this.penStatus = PenStatus.down
            const classes: any[] = Object.values(Models)
            for (const cls of classes) {
                let {type: t} = cls
                if (t as GraphType) {
                    if (t === type) {
                        const model = cls.withPenModel(this)
                        this.currentDrawModel = model
                        this.modelList.add(model)
                    }
                }
            }
        }
    }

    penUp(e: MouseEvent): void {
        if (this.penStatus === PenStatus.down) {
            this.upEvt = e
            this.penStatus = PenStatus.up
            this.currentDrawModel && this.currentDrawModel.update(this)
            this.currentDrawModel = null
        }
    }

    getPenInfo(): PenInfo {
        const point = this.currentPoint?.toData()
        return {
            x: this.moveEvt ? this.moveEvt.offsetX : 0,
            y: this.moveEvt ? this.moveEvt.offsetY : 0,
            status: this.penStatus,
            color: this.color,
            type: this.type,
        }
    }

    draw(type: GraphType) {
        this.currentDrawModel && this.currentDrawModel.update(this)
    }

    move(e: MouseEvent, type: GraphType): ModelData[] {
        this.moveEvt = e
        this.currentPoint = PointModel.withPenModel(this)
        if (this.penStatus === PenStatus.down) {
            this.draw(type)
        }
        const ret = this.modelList.toData()
        return ret
    }

    cleanAll() {
        this.modelList && this.modelList.clear()
    }

    setColor(color: string) {
        this.color = color
    }
}

export const pen = new Pen()
