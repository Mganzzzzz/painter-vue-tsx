import {CSSProperties, reactive, ref, Ref} from 'vue'
import {Drawing, GraphType, ModelCursorPenData, ModelData, PenInfo} from "../const";
import {pen} from "../pen";
import CommandDraw from "../command/CommandDraw";
import {CursorPen} from "../CursorPen";

export default function useCursor(graphList: Ref<ModelData[]>) {

    const cursorData = ref<ModelCursorPenData>({x: 0, y: 0});
    const showCursor = ref<boolean>(false);
    const cursorPen = new CursorPen()
    cursorPen.loop = true
    cursorPen.init()

    const update = (pen: PenInfo) => {
        cursorData.value.x = pen. x
        cursorData.value.y = pen.y
        showCursor.value = pen.show
        graphList.value = cursorPen.toData()
    }
    const startLineCursor = () => {
        showCursor.value = true
        cursorPen.play(update)
    }

    return {
        cursorData,
        showCursor,
        startLineCursor,
    }
}

