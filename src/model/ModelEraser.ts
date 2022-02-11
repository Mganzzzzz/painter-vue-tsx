import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgTriangleProps, Point, SvgRectProps} from "../const";
import {Pen} from "../pen";


export class ModelEraser extends ModelBase {
    static type: GraphType = GraphType.eraser

    private path: Point[] = []
    private height!: number
    private width!: number
    private start: Point
    protected component = GraphType.eraser


    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.start = {
            x: penInfo.x,
            y: penInfo.y,
        }
    }

    update(pen: Pen) {
        const penInfo = pen.getPenInfo()
        penInfo.strokeWith
        const {x, y} = penInfo
        this.path.push({
            x, y
        })
    }

    toData(): ModelData {
        const points = this.path.map(n => {
            const {x, y} = n
            return `${x} ${y}`
        }).join(',')

        const base = super.toData()
        const props: SvgTriangleProps = {
            points,
        }

        base.props = {...base.props, ...props}
        base.props.stroke = '#fff'
        base.props["stroke-width"] = this.pen.strokeWith
        return base
    }


}
