import {GET_PAGE} from '../mutation-types'

export default {
  state: {
    page: 1,
    num: 5
  },
  actions: {
    setPage ({commit}, pageData) {
      commit(GET_PAGE, pageData)
    }
  },
  mutations: {
    [GET_PAGE] (state, bool) {
      state.page = bool
    }
  }
}
