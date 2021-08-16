
export const state = () => ({
    folder: []
})

export const getters = {
    getterValue: state => {
        return state.value
    }
}

export const mutations = {
    saveFiles: (state) => {
        state.file = file
    }
}

export const actions = {
    async fetchAllFolders() {
        const { data } = await this.$axios.get(`/albums`)
        return data
    }
}