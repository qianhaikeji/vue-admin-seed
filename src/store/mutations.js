import * as types from './mutation-types'

const mutations = {
  [types.GO_TO_PROFILE]: (state, { mode, profileInParam }) => {
    state.listAndProfile.currentMode = mode
    state.listAndProfile.profileInParam = Object.assign({}, profileInParam)
  },
  [types.BACK_TO_LIST]: (state, { mode, profileOutParam }) => {
    state.listAndProfile.currentMode = mode
    state.listAndProfile.profileOutParam = Object.assign({}, profileOutParam)
  },
  [types.INIT_LIST_AND_PROFILE]: (state) => {
    state.listAndProfile.currentMode = 'list'
    state.profileInParam = {}
    state.profileOutParam = {}
  }
}

export default mutations
