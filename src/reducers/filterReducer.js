

const filterReducer = (state = "", action) => {
    switch (action.type) {
        case 'FILTER':
            const filter = action.filter
            return filter
        default:
            return state
    }
}

export const filterAnecdote = (content) => {
    return {
        type: "FILTER",
        filter: content

    }
}

export default filterReducer
