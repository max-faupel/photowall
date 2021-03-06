import posts from "../data/posts"

function postReducer(state = posts, action) {
    console.log(action.index)

    switch (action.type) {
        case "REMOVE_POST": return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case "ADD_POST": return [...state, action.post]
        default: return state
    }
}

export default postReducer