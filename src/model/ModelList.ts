import {GraphType, ModelData} from "../const";
import {ModelBase} from "./ModelBase";

export class ModelList {
    private _list: ModelBase[] = [];
    // private pen: Pen = pen;

    toData(): ModelData[] {
        return this._list.map(g => g.toData())
    }


    get list(): ModelBase[] {
        return this._list;
    }

// startDraw(type: GraphType): void {
    //     const model = this.pen.draw(type)
    //     this.list.push(model)
    // }
    //
    // stopDraw(): void {
    //
    //     const model = this.pen.draw()
    //     this.list.push(model)
    // }


    add(model: ModelBase) {
        this._list.push(model)
    }

    clear() {
        this._list = []
    }

    getList():ModelBase[] {
        return this._list
    }
}
