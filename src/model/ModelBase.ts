import {ModelData} from "../const";
import {Pen} from "../pen";

export class ModelBase {

    toData():ModelData {
        return {
            component: '',
            props: {}
        }
    }
    update(pen: Pen) {

    }
}
