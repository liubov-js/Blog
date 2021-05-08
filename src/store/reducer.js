import * as actionTypes from './actionTypes';

const initialState = {
    posts: [],
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POSTS:
        return {
            ...state,
            posts: action.payload
        }
        case actionTypes.LOAD_USERS:
        return {
            ...state,
            users: action.payload
        }
    }
    return state;
}

export default reducer;