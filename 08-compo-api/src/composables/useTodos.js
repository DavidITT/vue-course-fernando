import {useStore} from "vuex";
import {computed, ref} from "vue";

const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')

    return {
        currentTab,
        //Computed
        pending: computed(() => store.getters['pendingTodos']),
        /*all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),*/
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        //Methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
        createTodo: (text) => store.commit('createToto', text),
    }
}

export default useTodos