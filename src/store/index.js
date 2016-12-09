import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as state from './state'
import * as getters from './getters'
import * as actions from './actions'
import good from './modules/good'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    good
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
