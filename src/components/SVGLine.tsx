import {defineComponent, markRaw} from "vue";

export const SVGLine = defineComponent({
    name: "Line",
    setup(props) {
        return () => <line {...props}/>
    }
})


