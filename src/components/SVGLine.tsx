import {defineComponent, toRefs} from "vue";
import {ModelData, SvgBaseProps, SvgLineProps, SvgTriangleProps} from "../const";

interface IProps  {
    data: SvgLineProps
}

export const SVGLine = defineComponent({
    setup(props:IProps) {
        const {data} = toRefs(props)
        return () => <line {...props.data}/>
    }
})


