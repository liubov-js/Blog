import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import * as actionTypes from '../../../store/actions';
import articles from '../../../articles.json';
import Comments from '../Comments/Comments';

class FullPost extends Component {
    componentDidMount() {
        const { loadPosts, posts } = this.props;
        if (!posts.length) {
            loadPosts(articles);
        } 
    }

    render () {
        const id = this.props.match.params.id; // from URL
        const posts = this.props.posts;
        const post = posts.find(post => post.id === Number(id));

        console.log({id, post, posts})

        if (!post) return 'Post wasn\'t found';

        return (
            <div>
                <h1>{post.name}</h1>
                <img src={post.image} width="80%"/>
                <p>{post.description}</p>
                <p>{post.body}</p>
                <p>{post.createdAt}</p>
                <Comments postId={id} /> {/* created prop postId */}
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FullPost));
