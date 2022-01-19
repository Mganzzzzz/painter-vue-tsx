import {ModelBase} from "./ModelBase";
import {SVGLine} from "../components";
import {GraphType, ModelData, PenInfo, SvgBaseProps, SvgLineProps} from "../const";
import {Pen} from "../pen";

console.log('debug SVGLine', SVGLine)

export class ModelLine extends ModelBase {
    static type: GraphType = GraphType.line
    private startX: number = 0
    private startY: number = 0
    private endX: number = 0
    private endY: number = 0
    protected component = SVGLine

    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.startX = penInfo.x
        this.startY = penInfo.y
    }

    toData(): ModelData {
        const base = super.toData()
        const props: SvgLineProps = {
            x1: this.startX, y1: this.startY, x2: this.endX, y2: this.endY
        }

        base.props = {...base.props, ...props}
        return base
    }

    update(pen: Pen) {
        const _p = pen.getPenInfo()
        this.endX = _p.x
        this.endY = _p.y
        this.color = _p.color
    }
}
