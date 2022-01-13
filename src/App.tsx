import {computed, createVNode, defineComponent, h, ref} from "vue";
import {Drawing, GraphType, MapOf, ModelData} from "./const";
import {SvgLine} from './components'

import {pen} from "./pen";
import {ModelList} from "./model";
import './App.scss'

const modelList = new ModelList()
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
        const drawing = ref<Drawing>(Drawing.end);
        const graphList = ref<ModelData[]>(modelList.toData());
        const graphType = ref<GraphType>(GraphType.line);


        const handleSelectColor = (e: Event) => {
            // console.log('debug e', e)

        }
        const handleMouseDownCanvas = (e: MouseEvent) => {
            drawing.value = Drawing.start
            pen.penDown(graphType.value);
        }

        const handleMouseUpCanvas = (e: MouseEvent) => {
            drawing.value = Drawing.end
            pen.penUp(e);
        }

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

        const handleMouseMoveCanvas = (e: MouseEvent) => {

            const dataList = pen.move(e, graphType.value)
            if (drawing.value === Drawing.start) {
                graphList.value = dataList
            }
        }

        const handleChangeShape = (type: GraphType) => {
            pen.setPenType(type)
            graphType.value = type
        }

        const handleClearAll = (type: GraphType) => {
            graphList.value = []
            pen.cleanAll()
        }

        const btnDrawStyles = computed(() => `draw-line-btn ${String(graphType.value)}`)

        return () => (
            <div className="App">
                <div className="header">
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.path)}>path
                    </button>
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.rect)}>长方形
                    </button>
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.round)}>圆形
                    </button>
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.ellipse)}>椭圆
                    </button>
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.polygon)}>三角形
                    </button>
                    <button className={btnDrawStyles.value} onClick={() => handleChangeShape(GraphType.line)}>路径
                    </button>
                    <button className="clear-all-btn" onClick={handleClearAll}>清空</button>
                    <input type="color" onInput={handleSelectColor}/>
                </div>
                <div className="body">
                    <div className="main">
                        <div className="left-side">
                        </div>
                        <div class="right-side">
                            <svg class="canvas"
                                 onmousedown={handleMouseDownCanvas}
                                 onmouseup={handleMouseUpCanvas}
                                 onmousemove={handleMouseMoveCanvas}
                            >
                                {
                                    graphList.value.map((graph, index) => {
                                        return renderGraph(graph, index);
                                    })
                                }
                            </svg>
                        </div>

                    </div>
                    <div className="tool-area">

                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        );
    },
})


