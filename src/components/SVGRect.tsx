import {defineComponent, markRaw} from "vue";

export const SVGRect = markRaw({
    name: "Rect",
    setup() {
        return () => <rect />
    }
})


