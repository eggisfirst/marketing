import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './modules/home'
import child from './modules/child'
import select from './modules/components/select'
import rightContainer from './modules/components/rightContainer'

export default new Vuex.Store({
  modules: {
    home,
    child,
    select,
    rightContainer
  }
})