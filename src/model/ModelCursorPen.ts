import {ModelBase} from "./ModelBase";
import {ModelCursorPenData} from "../const";

export class ModelCursorPen  {

    toData(): ModelCursorPenData {
        return {
            x: 10,
            y: 10,
        }
    }
}
