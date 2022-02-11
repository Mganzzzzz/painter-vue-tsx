import {defineComponent, markRaw} from "vue";
import {SvgPathProps} from "../const";

export const SVGEraser = markRaw({
    name: "Eraser",
    setup(props: SvgPathProps) {
        return () => <polyline />
    }
})


