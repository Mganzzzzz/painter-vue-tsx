import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgTriangleProps, Point, SvgLineProps} from "../const";
import {Pen} from "../pen";

export class ModelTriangle extends ModelBase {
    static type: GraphType = GraphType.triangle

    private r: number = 0
    private center: Point
    private p1!: Point
    private p2!: Point
    private p3!: Point
    protected component = GraphType.triangle

    constructor(penInfo: PenInfo) {
        super(penInfo);
        const {point} = penInfo
        const centerX = penInfo.x
        const centerY = penInfo.y
        this.center = {
            x: centerX,
            y: centerY,
        }
    }

    update(pen: Pen) {
        const penInfo = pen.getPenInfo()
        const {x, y} = penInfo
        this.p1 = {x, y}

        const x1 = penInfo.x
        const y1 = penInfo.y


        const {x: centerX, y: centerY} = this.center


        this.r = Math.sqrt(Math.pow((x1 - centerX), 2) - Math.pow((y1 - centerY), 2))

        const a = centerX
        const b = centerY
        let c = 120

        const x2 = (x1 - a) * Math.cos(c) - (y1 - b) * Math.sin(c) + a
        const y2 = (y1 - b) * Math.cos(c) + (x1 - a) * Math.sin(c) + b
        this.p2 = {x: x2, y: y2}

        c = 240
        const x3 = (x1 - a) * Math.cos(c) - (y1 - b) * Math.sin(c) + a
        const y3 = (y1 - b) * Math.cos(c) + (x1 - a) * Math.sin(c) + b
        this.p3 = {x: x3, y: y3}
    }


    toData(): ModelData {
        let {
            p1, p2, p3, center
        } = this
        const points = [p1, center, p3, p1].map(n => {
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
