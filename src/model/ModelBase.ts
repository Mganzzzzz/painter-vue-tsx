import {GraphType, ModelData, PenInfo} from "../const";
import {Pen} from "../pen";

export class ModelBase {
    static type: GraphType

    protected color: string = '#000000'


    constructor(penInfo: PenInfo) {
    }

    static withPenModel(pen: Pen): ModelBase {
        const penInfo = pen.getPenInfo()
        return new this(penInfo)
    }

    toData(): ModelData {
        return {
            component: '',
            props: {}
        }
    }

    update(pen: Pen) {

    }
}
