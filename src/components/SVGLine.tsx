import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps} from "../const";

export const SVGLine = defineComponent({
    setup(props) {
        return () => <line {...props}/>
    }
})


