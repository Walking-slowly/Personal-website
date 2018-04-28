const state = {
    loading:0,
    loadingBool:false,
    headPopups:false
}

const actions = {
    
}

const mutations = {
    showLoading (state,val) {
        state.loading = val
    },
    loadingBool (state,val) {
        state.loadingBool = val
    },
    showHead (state,val) {
        state.headPopups = val
    }

}

export default {
    state,
    mutations,
    actions

}