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
    }
    return state;
}

export default reducer;