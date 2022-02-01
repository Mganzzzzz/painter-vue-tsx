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
        const command = new CommandPenUP(pen, e)
        command.execute()
    }
    const handlePenDown = (e: MouseEvent) => {
        drawing.value = Drawing.start
        const command = new CommandPenDown(pen, graphType.value)
        command.execute()
    }

    const handlePenMove = (e: MouseEvent) => {
        const command = new CommandPenMove(pen, e, graphType.value)
        command.execute()
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
    }
}

