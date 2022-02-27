import {ComputedRef, defineComponent, toRefs, Ref, UnwrapNestedRefs} from "vue";
import {GraphType, ModelData} from "../const";
import {renderGraph} from "./dymanicComponent";

interface Props {
    // handlePenDown: (e: Event) => void;
    // handlePenUp: (e: Event) => void;
    // handlePenMove: (e: Event) => void;
    $attrs: {
        graphList: Ref<ModelData[]>,
        penStyles: Ref<{ string: any }>,
        handlePenDown: (payload: MouseEvent) => void,
        handlePenUp: (payload: MouseEvent) => void,
        handlePenMove: (payload: MouseEvent) => void,
    }
}

export const CanvasPainter = defineComponent(function CanvasPainter() {
        return (props: Props) => {
            const {
                $attrs
            } = props
            const {
                graphList,
                penStyles,
                handlePenDown,
                handlePenUp,
                handlePenMove,
            } = $attrs
            return <svg class="canvas"
                        onMousedown={handlePenDown}
                        onMouseup={handlePenUp}
                        onMousemove={handlePenMove}
            >
                {
                    graphList.value.map((graph, index) => {
                        return renderGraph(graph, index);
                    })
                }
            </svg>
        }
    }
)


