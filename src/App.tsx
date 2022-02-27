import {defineComponent, reactive, watch} from "vue";
import './App.scss'
import useCanvas from "./hooks/canvasHook";
import useGraphMenu from "./hooks/menuHook";
import {GraphMenu, GraphMenuProp} from "./components/GraphMenu";
import {renderGraph} from "./components/dymanicComponent";
import {GraphType} from "./const";
import logo from './assets/logo.png'
import {CanvasPainter} from "./components/CanvasPainter";

export default defineComponent({
    setup() {
        const {
            handlePenMove, handlePenUp, handlePenDown,
            graphType, graphList,
            updateCanvasStyle,
        } = useCanvas()


        const grapMenuProps: GraphMenuProp = useGraphMenu(graphType, graphList)

        const penStyles = reactive({
            cursor: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhElEQVR42u3WwQ6AIAwDUPj/j1ZInOkR24KBbDc52Ndx0Fp+npqABCTgGMDV5n1pm6WAHo6Z3TKKkAERDgso8TyC2BuAqw/Al3Ab4AnE8/kAdfV2AF7FdICrvQ3AtqcAzvYSABrT7WUAnFHhFoASLgPUcAngCKcAgLB8ys/5I0pAArYF3BnMjyGREgE3AAAAAElFTkSuQmCC'), crosshair;`,
        })

        const img = new URL('./assets/logo.png', import.meta.url).href
        watch(graphType, (cur, prev) => {
            if(cur === GraphType.eraser) {
                penStyles.cursor = 'crosshair'
            }
        })

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
                            {/*<CanvasPainter*/}
                            {/*    graphList={graphList}*/}
                            {/*    penStyles={penStyles}*/}
                            {/*    handlePenDown={handlePenDown}*/}
                            {/*    handlePenUp={handlePenUp}*/}
                            {/*    handlePenMove={handlePenMove}*/}
                            {/*/>*/}
                            <svg class="canvas"
                                style={penStyles}
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


