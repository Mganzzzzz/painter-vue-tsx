import {defineComponent,} from "vue";
import {SvgPathProps,} from "../const";

interface Props {
    $attrs: SvgPathProps
}


export const SVGRect = defineComponent(function SVGRect() {
    return (props: Props) => {
        return <rect {...props.$attrs} />
    }
})
