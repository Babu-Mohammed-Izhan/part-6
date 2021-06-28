
const initialState = {
    notification: " "
}
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NOTIFICATION":
            const data = action.data
            let newState = {
                ...state,
                notification: data
            }
            return newState
        case "DELETE":
            console.log("This works")
            return state = { ...initialState }
        default:
            return state
    }
}

export const notification = (message, time) => {
    return async dispatch => {
        let timeoutID
        dispatch({
            type: "NOTIFICATION",
            data: message,
            time: time
        })
        const totaltime = time * 1000
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            dispatch({
                type: "DELETE",
            })
        }, totaltime)

    }
}

export default notificationReducer