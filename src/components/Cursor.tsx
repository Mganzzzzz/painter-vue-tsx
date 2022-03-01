import {CSSProperties, reactive, Ref, ref} from 'vue'
import {defineComponent} from "vue";
import {Drawing, GraphType, ModelCursorPenData, ModelData, PenInfo, SvgLineProps} from "../const";
import CommandDraw from "../command/CommandDraw";
import CommandCursor from "../command/CommandCursor";
import {ModelBase} from "../model";
import {Pen} from "../pen";

interface Props {
    $attrs: ModelCursorPenData
}


export const Cursor = defineComponent(function Crosor() {
    return (props: Props) => {
        const {$attrs} = props
        const {x, y} = $attrs
        const left = `${x + 52}px`
        const top = `${y}px`
        return <div class="cursor-pen" style={{top, left}}/>
    }
})



