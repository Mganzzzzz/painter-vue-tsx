import {defineComponent, markRaw} from "vue";
import {SvgRectProps} from "../const";

export const SVGRect = markRaw({
    name: "Rect",
    setup(props: SvgRectProps) {
        return () => <rect {...props} />
    }
})


