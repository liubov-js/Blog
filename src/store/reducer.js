import post from '../components/Post/Post';
import * as actionTypes from './actions';

const initialState = {
    listOfArticles: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_POST:
            const fullArticle = {
                id: post.id,
                name: post.name,
                image: post.image,
                description: post.description,
                body: post.body,
                createdAt: post.createdAt
            }
            return {
                ...state,
                listOfArticles: state.listOfArticles.concat(fullArticle),
            }
    }
    return state;
}

export default reducer;