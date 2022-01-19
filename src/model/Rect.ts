import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgTriangleProps, Point, SvgRectProps} from "../const";
import {Pen} from "../pen";
import {cos, sin} from "../common/utils";
import {PointModel} from "./PointModel";
import {SVGRect} from "../components";

export class Rect extends ModelBase {
    static type: GraphType = GraphType.rect

    private start: Point
    private height!: number
    private width!: number
    protected component = SVGRect


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
        const width = penInfo.x - this.start.x
        const height = penInfo.y - this.start.y
        if(width >= 0) {
            this.width = width
        } else {
            this.start.x = x
            // this.start.x = this.start.x + width
            this.width = 0 - width
        }

        if(height >= 0) {
            this.height = height
        } else {
            this.start.y = y
            // this.start.y = this.start.y + height
            this.height = 0 - height
        }
    }


    toData(): ModelData {
        const {x, y} = this.start
        const {height, width} = this
        const props: SvgRectProps = {
            x, y, height, width
        }


        const base = super.toData()

        base.props = {...base.props, ...props}
        return base
    }


}
