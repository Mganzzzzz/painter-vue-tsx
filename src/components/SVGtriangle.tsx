import {defineComponent,} from "vue";
import {SvgTriangleProps,} from "../const";

interface Props {
    $attrs: SvgTriangleProps
}


export const SVGTriangle = defineComponent(function SVGTriangle() {
    return (props: Props) => {
        return <polyline {...props.$attrs} />
    }
})
