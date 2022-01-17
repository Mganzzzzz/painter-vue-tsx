import {ModelData} from "../const";
import {Pen} from "../pen";

export class ModelBase {
    protected color: string = '#000000'


    static withPenModel(pen: Pen): BaseModel {
        const {svg} = pen.toData()
        return new this(svg)
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
