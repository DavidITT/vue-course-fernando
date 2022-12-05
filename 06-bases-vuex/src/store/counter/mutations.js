
export const increment = (state) => {
    state.count++
    state.lastMutation = 'Increment'
}

export const incrementBy = (state, val) => {
    state.count += val
    state.lastRandomInt = val
    state.lastMutation = 'Increment in ' + val
}

export const setLoading = (state, val) => {
    state.isLoading = val
    state.lastMutation = 'setLoading: ' + val
}