import {ref} from 'vue'
import {Drawing, GraphType, ModelData} from "../const";
import {pen} from "../pen";
import {CommandPenMove, CommandPenUP, CommandPenDown} from "../command/DrawCommand";

export default function useCanvas() {

    const drawing = ref<Drawing>(Drawing.end);
    const graphList = ref<ModelData[]>([]);
    const graphType = ref<GraphType>(GraphType.line);

    const handlePenUp = (e: MouseEvent) => {
        drawing.value = Drawing.end
        // pen.penUp(e);
        const command = CommandPenUP.commandWithPen(pen, e)
        command.execute(e)
    }
    const handlePenDown = (e: MouseEvent) => {
        drawing.value = Drawing.start
        const command = CommandPenDown.commandWithPen(pen, e)
        command.execute()
        // pen.penDown(graphType.value);
    }

    const handlePenMove = (e: MouseEvent) => {
        const command = CommandPenMove.commandWithPen(pen, e)
        const dataList = command.execute()
        // const dataList = pen.move(e, graphType.value)
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

