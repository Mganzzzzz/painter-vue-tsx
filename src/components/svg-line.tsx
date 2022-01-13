import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps} from "../const";

export const SvgLine = defineComponent({
    setup(props) {
        console.log('debug props', props)
        const _props = toRefs<SvgBaseProps>(props)
        // const {data} = toRefs(props)
        return () => <line {..._props}/>
    }
})


