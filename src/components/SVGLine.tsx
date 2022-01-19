import {defineComponent, markRaw} from "vue";

export const SVGLine = markRaw({
    name: "Line",
    setup(props) {
        return () => <line />
    }
})


