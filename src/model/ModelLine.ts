import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgBaseProps, SvgLineProps} from "../const";
import {Pen} from "../pen";

export class ModelLine extends ModelBase {
    static type: GraphType = GraphType.line
    private startX: number = 0
    private startY: number = 0
    private endX: number = 0
    private endY: number = 0
    protected component = GraphType.line

    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.startX = penInfo.x
        this.startY = penInfo.y
    }

    toData(): ModelData {
        const base = super.toData()
        base.props = {
            x1: this.startX, y1: this.startY, x2: this.endX, y2: this.endY,
            ...base.props,
        }
        return base
    }

    update(pen: Pen) {
        const _p = pen.getPenInfo()
        this.endX = _p.x
        this.endY = _p.y
        this.color = _p.color
    }
}
