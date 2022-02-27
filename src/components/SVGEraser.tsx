import {defineComponent, markRaw} from "vue";
import {SvgPathProps} from "../const";

interface Props {
    $attrs:SvgPathProps
}

export const SVGEraser = defineComponent(function SVGEraser() {
    return (props: Props) => {
        const {$attrs} = props
        return <polyline {...$attrs}/>
    }
})
