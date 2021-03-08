import * as actionTypes from './actions';

const initialState = {
    posts: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POSTS:
           
        return {
            ...state,
            posts: action.payload
        }
        case actionTypes.OPEN_FULL_POST:
        return {
            ...state,
            fullPost: action.id
        }
    }
    return state;
}

export default reducer;