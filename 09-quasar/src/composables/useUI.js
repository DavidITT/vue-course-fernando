import {useStore} from "vuex";
import {computed} from "vue";
import {toggleSideMenu} from "src/store/ui/mutations";

const useUI = () => {
  const store = useStore()

  return {
    // Side Menu options
    //sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
    sideMenuOpen: computed({
      get(){
        return store.getters['ui/isSideMenuOpen']
      },
      set(){
        store.commit('ui/toggleSideMenu')
      }
    }),
    toggleSideMenu: () => store.commit('ui/toggleSideMenu')
  }
}

export default useUI
