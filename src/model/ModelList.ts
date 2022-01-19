import {GraphType, ModelData} from "../const";
import {ModelBase} from "./ModelBase";

export class ModelList {
    private list: ModelBase[] = [];
    // private pen: Pen = pen;

    toData(): ModelData[] {
        return this.list.map(g => g.toData())
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
        this.list.push(model)
    }

    clear() {
        this.list = []
    }

    getList():ModelBase[] {
        return this.list
    }
}
