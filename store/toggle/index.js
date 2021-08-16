
export const state = () => ({
    active: false
})

export const getters = {
    getterValue: state => {
        return state.value
    }
}

export const mutations = {
    toggle: (state) => {
        state.active = !state.active
    }
}

export const actions = {}