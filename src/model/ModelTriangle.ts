import {ModelBase} from "./ModelBase";
import {ModelData, PenInfo, SvgLineProps, SvgTriangleProps} from "../const";
import {Pen} from "../pen";

export class ModelTriangle extends ModelBase {
    private x1: number = 0
    private y1: number = 0
    private x2: number = 0
    private y2: number = 0
    private x3: number = 0
    private y3: number = 0

    private centerX: number = 0
    private centerY: number = 0



    constructor({x, y}: { x: number, y: number }) {
        super();
        this.centerX = x
        this.centerY = y
    }

    update(pen: Pen) {
        const penInfo = pen.getPenInfo()

        this.x1 = penInfo.x
        this.y1 = penInfo.y
        
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
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
        }

        return {
            component: 'line',
            props,
        };
    }


}
