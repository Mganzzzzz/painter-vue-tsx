import {GraphType, MapOf, ModelData} from "../const";
import _ from 'lodash';
import {h} from "vue";
import {SVGLine, SVGPath, SVGRect, SVGTriangle} from "./index";

const componentsMap: MapOf<any> = {
    [GraphType.line]: SVGLine,
    [GraphType.rect]:SVGRect,
    [GraphType.triangle]:SVGTriangle,
    [GraphType.path]:SVGPath,
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
