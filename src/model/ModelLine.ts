import {ModelBase} from "./ModelBase";
import {ModelData, PenInfo, SvgLineProps} from "../const";
import {Pen} from "../pen";

export class ModelLine extends ModelBase {
    private startX: number = 0
    private startY: number = 0
    private endX: number = 0
    private endY: number = 0
    private color: string = '#000000'

    constructor({x, y}: { x: number, y: number }) {
        super();
        this.startX = x
        this.startY = y
    }

    toData(): ModelData {
        const props: SvgLineProps = {
            fill: "transparent",
            stroke: this.color, strokeWidth: "12",
            x1: this.startX, y1: this.startY, x2: this.endX, y2: this.endY
        }

        return {
            component: 'line',
            props,
        };
    }

    update(pen: Pen) {
        const _p = pen.getPenInfo()
        this.endX = _p.x
        this.endY = _p.y
        this.color = _p.color
    }
}
