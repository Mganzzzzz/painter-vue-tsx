import {ComputedRef, defineComponent, toRefs, Ref} from "vue";
import {GraphType} from "../const";

export type GraphMenuProp = {
    btnDrawStyles: Ref<string>;
    handleChangeShape: (type: GraphType) => void;
    handleClearAll: (e: MouseEvent) => void;
    handleSelectColor: (e: Event) => void;
    handleChangeStrokeWidth: (e: Event) => void;
    handleUndo: (e: Event) => void;

}
export const GraphMenu = defineComponent({
    props: [
        'btnDrawStyles',
        'handleChangeShape',
        'handleClearAll',
        'handleSelectColor',
        'handleChangeStrokeWidth',
        'handleUndo',
    ],
    setup(props: GraphMenuProp) {
        const {btnDrawStyles} = toRefs(props)
        const handleChangeShape = props.handleChangeShape
        const handleClearAll = props.handleClearAll
        const handleSelectColor = props.handleSelectColor
        const handleChangeStrokeWidth = props.handleChangeStrokeWidth
        const handleUndo = props.handleUndo

        return () => <div>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.path)}>path
            </button>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.rect)}>长方形
            </button>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.round)}>圆形
            </button>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.ellipse)}>椭圆
            </button>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.triangle)}>三角形
            </button>
            <button class={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.line)}>路径
            </button>
            <button class="clear-all-btn" onClick={handleUndo}>undo</button>
            <button class="clear-all-btn" onClick={handleClearAll}>清空</button>
            <input type="color" onInput={handleSelectColor}/>
            <input type="range" onChange={handleChangeStrokeWidth}/>
        </div>
    }
})


