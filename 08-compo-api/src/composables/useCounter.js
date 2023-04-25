import {ref} from "vue";

const useCounter = (initValue = 10) => {
    const counter = ref(initValue)

    return {
        counter,
        //methods
        decrease: () => counter.value--,
        increase: () => counter.value++,

    }
}

export default useCounter