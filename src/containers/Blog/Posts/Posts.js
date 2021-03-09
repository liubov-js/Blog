import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../../components/Post/Post';
import './Posts.css';
import * as actionTypes from '../../../store/actions';
import articles from '../../../articles.json';
import { Link } from 'react-router-dom';

class Posts extends Component {
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts(articles);
    }

    render () {
        const { posts } = this.props;
        const { id } = Number(posts.id);

        return (
            <div className="Posts">
                <Link to={`/article-${id}`}>
                    {posts.map(post => <Post key={post.id} {...post} />)}
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadPosts: (articles) => dispatch({type: actionTypes.LOAD_POSTS, payload: articles}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
