import * as actionTypes from './actionTypes';

export const loadPosts = (articles) => ({type: actionTypes.LOAD_POSTS, payload: articles});