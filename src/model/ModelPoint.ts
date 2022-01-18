import {ModelBase} from "./ModelBase";
import {GraphType, ModelData, PenInfo, SvgLineProps} from "../const";
import {Pen} from "../pen";

export class ModelPoint extends ModelBase {
    static type: GraphType = GraphType.point
    private x: number = 0
    private y: number = 0

    constructor(penInfo: PenInfo) {
        super(penInfo);
        this.x = penInfo.x
        this.y = penInfo.y
    }

    toData(): ModelData {
        const props: SvgLineProps = {
            fill: "transparent",
            stroke: this.color, strokeWidth: "12",
            x1: this.x, y1: this.y, x2: this.x, y2: this.y
        }

        return {
            component: 'line',
            props,
        };
    }

}
