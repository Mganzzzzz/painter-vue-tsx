import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgLineProps} from "../const";
import {Pen} from "../pen";

export class PointModel {
    static type: GraphType = GraphType.point
    private x: number = 0
    private y: number = 0

    static withPenModel(pen: Pen): PointModel {
        const penInfo = pen.getPenInfo()
        return new this(penInfo)
    }

    constructor(pen: PenInfo) {
        this.x = pen.x
        this.y = pen.y
    }

    toData() {
        const {x, y} = this
        return {
            x, y
        }
    }


}
