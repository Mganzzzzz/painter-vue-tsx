import {computed, defineComponent, h, ref} from "vue";
import {GraphType, MapOf, ModelData} from "./const";
import { SVGTriangle} from './components'

import './App.scss'
import useCanvas from "./hooks/canvasHook";
import useGraphMenu from "./hooks/menuHook";
import {GraphMenu, GraphMenuProp} from "./components/GraphMenu";

export default defineComponent({
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
            return <>
                {
                    h(graph.component, {
                        key: index,
                        ... graph.props
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

        return () => (
            <div class="App">
                {graphType.value}
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


