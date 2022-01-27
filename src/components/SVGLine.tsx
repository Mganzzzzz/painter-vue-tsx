import {defineComponent, markRaw} from "vue";
import {SvgLineProps} from "../const";

export const SVGLine = defineComponent({
    name: "Line",
    setup(props: SvgLineProps) {
        return () => <line {...props}/>
    }
})


