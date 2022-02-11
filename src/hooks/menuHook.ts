import {computed, reactive, ref, Ref} from 'vue'
import {pen} from "../pen";
import {GraphType, ModelData} from "../const";
import {GraphMenu, GraphMenuProp} from "../components/GraphMenu";

function userGraphTypeMenu() {
    const labelMap = {
        [GraphType.base]: '',
        [GraphType.line]: '线段',
        [GraphType.rect]: '矩形',
        [GraphType.round]: '圆形',
        [GraphType.path]: '随手画',
        [GraphType.ellipse]: '椭圆',
        [GraphType.triangle]: '三角形',
        [GraphType.polygon]: '多边形',
        [GraphType.point]: '点',
        [GraphType.eraser]: '橡皮擦',
    }

    const t = Object.entries(GraphType).map(([k, v]) => {
        const label = labelMap[v]
        return {
            key: k,
            type: v,
            label,
            active: false,
        }
    })
    const grapyTypesArray = reactive(t)
    const setActiveMenu = (type: GraphType) => {
        grapyTypesArray.forEach(m => m.active = m.type === type)
    }
    return {
        setActiveMenu,
        grapyTypesArray,
    }
}

export default function useGraphMenu(graphType: Ref<GraphType>, graphList: Ref<ModelData[]>): GraphMenuProp {
    const {
        setActiveMenu,
        grapyTypesArray,
    } = userGraphTypeMenu()

    const handleSelectColor = (e: Event) => {
        const v = (<HTMLInputElement>e.target).value

        pen.setColor(v)
    }

    const handleChangeShape = (type: GraphType) => {
        pen.setPenType(type)
        setActiveMenu(type)
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

    const handleRedo = (e: Event) => {
        pen.redo()
        graphList.value = pen.toData()
    }


    return {
        grapyTypesArray,
        handleSelectColor,
        handleChangeShape,
        handleClearAll,
        handleChangeStrokeWidth,
        handleUndo,
        handleRedo,
    }
}
