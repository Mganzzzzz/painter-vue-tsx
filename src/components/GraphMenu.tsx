import {ComputedRef, defineComponent, toRefs, Ref, UnwrapNestedRefs} from "vue";
import {GraphType} from "../const";

export type GraphMenuProp = {
    grapyTypesArray: UnwrapNestedRefs<{ active: boolean, key: string, type: GraphType, label: string }[]>;
    handleChangeShape: (type: GraphType) => void;
    handleClearAll: (e: MouseEvent) => void;
    handleSelectColor: (e: Event) => void;
    handleChangeStrokeWidth: (e: Event) => void;
    handleUndo: (e: Event) => void;
    handleRedo: (e: Event) => void;
    startLineCursor: (e: Event) => void;
}

export const GraphMenu = defineComponent({
    name: 'GraphMenu',
    props: [
        'grapyTypesArray',
        'handleChangeShape',
        'handleClearAll',
        'handleSelectColor',
        'handleChangeStrokeWidth',
        'handleUndo',
        'handleRedo',
        'startLineCursor',
    ],
    setup(props: GraphMenuProp) {
        const {grapyTypesArray} = toRefs(props)
        console.log('debug grapyTypesArray', grapyTypesArray)
        return () => <div>
            {grapyTypesArray.value.map(({active, type, label}) => <button
                class={{active: active}}
                onClick={() => props.handleChangeShape(type)}>{label}</button>)}
            <button class="undo" onClick={props.handleUndo}>撤销</button>
            <button class="redo" onClick={props.handleRedo}>重做</button>
            <button class="clear" onClick={props.handleClearAll}>清空</button>
            <button class="record" onClick={props.startLineCursor}>帮助</button>
            <input type="color" onInput={props.handleSelectColor}/>
            <input type="range" value={10} onChange={props.handleChangeStrokeWidth}/>
        </div>
    }
})


