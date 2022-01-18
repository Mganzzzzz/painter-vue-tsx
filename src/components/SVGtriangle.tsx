import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps, SvgLineProps, SvgTriangleProps} from "../const";

export const SVGtriangle = defineComponent({
    setup(props: SvgTriangleProps) {
        return () => <polyline {...props}/>
    }
})


