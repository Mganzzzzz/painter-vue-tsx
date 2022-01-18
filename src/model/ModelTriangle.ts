import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgTriangleProps} from "../const";
import {Pen} from "../pen";
import {cos, sin} from "../common/utils";

export class ModelTriangle extends ModelBase {
    static type: GraphType = GraphType.triangle
    private x1: number = 0
    private y1: number = 0
    private x2: number = 0
    private y2: number = 0
    private x3: number = 0
    private y3: number = 0

    private centerX: number = 0
    private centerY: number = 0
    private r: number = 0


    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.centerX = penInfo.x
        this.centerY = penInfo.y
    }

    update(pen: Pen) {
        const penInfo = pen.getPenInfo()


        this.x1 = penInfo.x
        this.y1 = penInfo.y

        let x0 = penInfo.x
        let y0 = penInfo.y

        this.r = Math.sqrt(Math.pow((x0 - this.centerX), 2) - Math.pow((y0 - this.centerY), 2))
        // let a = ()
        // let a = 120
        const {x1, y1} = this

        // Ma

        const a = this.centerX
        const b = this.centerY
        let c = 120

        const x2 = (x1 - a) * Math.cos(c) - (y1 - b) * Math.sin(c) + a
        const y2 = (y1 - b) * Math.cos(c) + (x1 - a) * Math.sin(c) + b

        c = -120
        const x3 = (x1 - a) * Math.cos(c) - (y1 - b) * Math.sin(c) + a
        const y3 = (y1 - b) * Math.cos(c) + (x1 - a) * Math.sin(c) + b
        this.x2 = x2
        this.y2 = y2
        this.x3 = x3
        this.y3 = y3
    }


    toData(): ModelData {
        const {
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
        } = this
        const props: SvgTriangleProps = {
            fill: "transparent",
            stroke: this.color, strokeWidth: "12",
            points: [x1,
                y1,
                x2,
                y2,
                x3,
                y3,]

        }

        return {
            component: GraphType.triangle,
            props,
        };
    }


}
