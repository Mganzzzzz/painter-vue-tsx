import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps} from "../const";

export const SVGtriangle = defineComponent({
    setup(props) {
        return () => <polyline {...props}/>
    }
})


