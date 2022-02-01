import {Ref} from 'vue'
import {pen} from "../pen";
import {GraphType, ModelData} from "../const";

export default function useGraphMenu(graphType: Ref<GraphType>, graphList: Ref<ModelData[]>) {
    const handleSelectColor = (e: Event) => {
        const v = (<HTMLInputElement>e.target).value
        pen.setColor(v)
    }

    const handleChangeShape = (type: GraphType) => {
        pen.setPenType(type)
        graphType.value = type
    }

    const handleClearAll = () => {
        graphList.value = []
        pen.cleanAll()
    }

    const handleChangeStrokeWidth = (e: Event) => {
        const v = (<HTMLInputElement>e.target).value
        pen.setPenStrokeWith(v)
    }

    const handleUndo = (e: Event) => {
        pen.undo()
        graphList.value = pen.toData()
    }

    return {
        handleSelectColor,
        handleChangeShape,
        handleClearAll,
        handleChangeStrokeWidth,
        handleUndo,
    }
}
