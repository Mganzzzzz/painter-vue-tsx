import {defineComponent, markRaw} from "vue";
import {SvgPathProps} from "../const";

export const SVGPath = markRaw({
    name: "Path",
    setup(props: SvgPathProps) {
        return () => <polyline />
    }
})


