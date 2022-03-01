import {CSSProperties, reactive, ref} from 'vue'
import {Drawing, GraphType, ModelData} from "../const";
import {pen} from "../pen";
import CommandDraw from "../command/CommandDraw";

export default function useCanvas() {

    const drawing = ref<Drawing>(Drawing.end);

    const graphList = ref<ModelData[]>([]);
    const graphType = ref<GraphType>(GraphType.line);
    let command: CommandDraw | null

    const handlePenDown = (e: MouseEvent) => {
        drawing.value = Drawing.start
        command = new CommandDraw(pen, e, graphType.value)
        command && command.startDraw()
    }

    const updateCanvasStyle = () => {
        const penInfo = pen.getPenInfo()
    }

    const handlePenUp = (e: MouseEvent) => {
        drawing.value = Drawing.end
        command && command.stopDraw()
    }

    const handlePenMove = (e: MouseEvent) => {
        pen.move(e, graphType.value)
        command && command.drawing(e)
        const dataList = pen.toData()
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
        updateCanvasStyle,
    }
}

