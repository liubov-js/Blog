import React, { Component } from 'react';
import { connect } from 'react-redux';
import articles from '../../../articles.json';

import Post from '../../../components/Post/Post';
import './Posts.css';
import * as actionTypes from '../../../store/actions';

class Posts extends Component {
    state = {
        posts: [],
    }

    render () {
        let posts;
        return (
            <div className="Posts">
                {articles.map(post => 
                    <Post 
                        key={post.id} 
                        name={post.name}
                        image={post.image}
                        description={post.description}
                        createdAt={post.createdAt}
                        onClick={() => this.props.onOpenPost(post.id)}
                    />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenPost: (id) => dispatch({type: actionTypes.OPEN_POST, post: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
