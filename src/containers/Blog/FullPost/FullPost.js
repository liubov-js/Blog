import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import './FullPost.css';
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
                <Link className="FullPost" to="/">Home</Link>
                <article className="FullPost">
                    <h1>{post.name}</h1>
                    <img className="Image" src={post.image} />
                    <h3>{post.description}</h3>
                    <p>{post.body}</p>
                    <p className="Date">{post.createdAt}</p>
                </article>
                <section className="FullPost">
                    <h5>Comments</h5>
                    <br />
                    <Comments postId={id} /> {/* created prop postId */}
                </section>
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
