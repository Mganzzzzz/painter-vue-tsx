import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps} from "../const";

export const SvgLine = defineComponent({
    setup(props) {
        return () => <line {...props}/>
    }
})


