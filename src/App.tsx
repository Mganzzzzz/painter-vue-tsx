import {computed, defineComponent, h, ref} from "vue";
import {GraphType, MapOf, ModelData} from "./const";
import {SvgLine} from './components'

import './App.scss'
import useCanvas from "./hooks/canvasHook";
import useGraphMenu from "./hooks/menuHook";
import {GraphMenu, GraphMenuProp} from "./components/GraphMenu";

const GraphComponent: MapOf<any> = {
    [GraphType.line]: SvgLine,
    // [GraphType.rect]: SvgRect,
    // [GraphType.round]: SvgRound,
    // [GraphType.path]: SvgPath,
}

export default defineComponent({
    components: {
        'SvgLine': SvgLine
    },

    setup() {
        const {
            handlePenMove, handlePenUp, handlePenDown,
            drawing, graphType, graphList,
        } = useCanvas()

        const {
            handleSelectColor,
            handleChangeShape,
            handleClearAll,
        } = useGraphMenu(graphType, graphList)


        const renderGraph = (graph: ModelData, index: number) => {
            const comp = GraphComponent[graph.component]
            return <>
                {
                    h(comp, {
                        key: index,
                        ...graph.props
                    })}
            </>
        }


        const btnDrawStyles = ref<string>(`draw-line-btn`)
        const grapMenuProps: GraphMenuProp = {
            btnDrawStyles,
            handleChangeShape,
            handleClearAll,
            handleSelectColor,
        }
        console.log('debug btnDrawStyles.value', btnDrawStyles.value)
        return () => (
            <div class="App">
                <div class="header">
                    <GraphMenu
                        {...grapMenuProps}
                    />
                </div>
                <div class="body">
                    <div class="main">
                        <div class="left-side">
                        </div>
                        <div class="right-side">
                            <svg class="canvas"
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
                        </div>

                    </div>
                    <div class="tool-area">

                    </div>
                </div>
                <div class="footer">
                </div>
            </div>
        );
    },
})


