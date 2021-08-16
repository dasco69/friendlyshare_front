
export const state = () => ({
    file: null
})

export const getters = {
    getterValue: state => {
        return state.value
    }
}

export const mutations = {
    saveFiles: (state, file) => {
        state.file = file
    }
}

export const actions = {
    async fetchAllFiles({ commit }, id) {
        commit('saveFiles')
        const { data } = await this.$axios.get(`/albums/${id}`)
        return data
    }
}