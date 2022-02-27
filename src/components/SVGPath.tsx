import {defineComponent,} from "vue";
import {SvgPathProps} from "../const";


interface Props {
    $attrs: SvgPathProps
}


export const SVGPath = defineComponent(function SVGPath() {
    return (props: Props) => {
        const {$attrs} = props
        return <polyline {...$attrs}/>
    }
})


