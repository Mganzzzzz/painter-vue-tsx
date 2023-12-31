import {GraphType, MapOf, ModelData} from "../const";
import {h} from "vue";
import {SVGLine, SVGPath, SVGRect, SVGTriangle} from "./index";
import {SVGEraser} from "./SVGEraser";

const componentsMap: MapOf<any> = {
    [GraphType.line]: SVGLine,
    [GraphType.rect]:SVGRect,
    [GraphType.triangle]:SVGTriangle,
    [GraphType.path]:SVGPath,
    [GraphType.eraser]:SVGEraser,
}

export const renderGraph = (graph: ModelData, index: number) => {
    const componentType = graph.component
    const component = componentsMap[componentType]
    return <>
        {
            h(component, {
                key: index,
                ...graph.props
            })}
    </>
}
