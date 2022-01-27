import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgTriangleProps, Point, SvgRectProps} from "../const";
import {Pen} from "../pen";


export class ModelPath extends ModelBase {
    static type: GraphType = GraphType.path

    private path: Point[] = []
    private height!: number
    private width!: number
    private command: Command
    protected component = GraphType.path


    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.start = {
            x: penInfo.x,
            y: penInfo.y,
        }
    }

    update(pen: Pen) {
        const penInfo = pen.getPenInfo()
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
        return base
    }


}
