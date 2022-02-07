import {computed, defineComponent, h, ref} from "vue";
import './App.scss'
import useCanvas from "./hooks/canvasHook";
import useGraphMenu from "./hooks/menuHook";
import {GraphMenu, GraphMenuProp} from "./components/GraphMenu";
import {renderGraph} from "./components/dymanicComponent";

export default defineComponent({
    setup() {
        const {
            handlePenMove, handlePenUp, handlePenDown,
            graphType, graphList,
        } = useCanvas()

        const grapMenuProps: GraphMenuProp = useGraphMenu(graphType, graphList)

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


