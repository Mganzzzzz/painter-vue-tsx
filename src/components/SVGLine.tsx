import {defineComponent, markRaw} from "vue";
import {SvgLineProps} from "../const";

export const SVGLine = defineComponent({
    name: "Line",
    setup() {
        return () => <line />
    }
})


