import {defineComponent, toRefs, markRaw} from "vue";
import {ModelData, SvgBaseProps, SvgLineProps, SvgTriangleProps} from "../const";

export const SVGTriangle = markRaw({
    name: "triangle",
    setup(props: SvgTriangleProps) {
        return () => <polyline {...props}/>
    }
})


