import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostPreview from '../../components/PostPreview/PostPreview';
import './Posts.css';
import * as actionTypes from '../../store/actions';
import articles from '../../articles.json';

class Posts extends Component {
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts(articles);
    }

    render () {
        const { posts } = this.props;

        return (
            <div className="Posts">
                {posts.map(post => <PostPreview key={post.id} {...post} />)}
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