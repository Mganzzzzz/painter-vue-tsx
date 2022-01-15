import {ref} from 'vue'
import {Drawing, GraphType, ModelData} from "../const";
import {pen} from "../pen";

export default function useCanvas() {

    const drawing = ref<Drawing>(Drawing.end);
    const graphList = ref<ModelData[]>([]);
    const graphType = ref<GraphType>(GraphType.line);

    const handlePenUp = (e: MouseEvent) => {
        drawing.value = Drawing.end
        pen.penUp(e);
    }
    const handlePenDown = (e: MouseEvent) => {
        drawing.value = Drawing.start
        pen.penDown(graphType.value);
    }

    const handlePenMove = (e: MouseEvent) => {
        const dataList = pen.move(e, graphType.value)
        if (drawing.value === Drawing.start) {
            graphList.value = dataList
        }
    }

    return {
        drawing,
        graphList,
        graphType,
        handlePenUp,
        handlePenDown,
        handlePenMove,
    }
}

