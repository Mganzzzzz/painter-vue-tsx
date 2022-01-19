import {GraphType, ModelData, PenInfo} from "../const";
import {Pen} from "../pen";
import {DefineComponent} from "vue";

export class ModelBase {
    static type: GraphType

    protected color: string = '#000000'
    protected pen: PenInfo
    protected component: any


    constructor(penInfo: PenInfo) {
        this.pen = penInfo
    }

    static withPenModel(pen: Pen): ModelBase {
        const penInfo = pen.getPenInfo()
        return new this(penInfo)
    }

    toData(): ModelData {
        return {
            component: this.component,
            props: {
                fill: "transparent",
                stroke: this.pen.color,
                'stroke-width': this.pen.strokeWith,
            }
        }
    }

    update(pen: Pen) {

    }
}
