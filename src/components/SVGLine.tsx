import {defineComponent} from "vue";
import {SvgLineProps} from "../const";

interface Props {
    $attrs: SvgLineProps
}

export const SVGLine = defineComponent(function SVGLine() {
    return (props: Props) => {
        const {$attrs} = props
        return <line {...$attrs}/>
    }
})



