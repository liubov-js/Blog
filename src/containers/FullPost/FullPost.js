import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import moment from 'moment';
import { Link } from 'react-router-dom';

import './FullPost.css';
import * as actionTypes from '../../store/actions';
import articles from '../../articles.json';
import Comments from '../Comments/Comments';

class FullPost extends Component {
    componentDidMount() {
        const { loadPosts, posts } = this.props;
        if (!posts.length) {
            loadPosts(articles);
        } 
    }

    render () {
        const { id } = this.props.match.params.id; // from URL
        const { posts } = this.props.posts;
        const post = posts.find(post => post.id === Number(id));
        
        if (!post) return 'Post wasn\'t found';

        return (
            <div>
                <Link to="/" className="FullPost">Home</Link>
                <article className="FullPost">
                    <h1>{post.name}</h1>
                    <img className="Image" src={post.image} />
                    <h3>{post.description}</h3>
                    <section className="Body">
                        {post.body.split('\r\n\r\n').map(str => 
                            <p key={str}>
                                {str}
                            </p>)}
                    </section>
                    <p className="Date">{moment(post.createdAt).format('YYYY/MM/DD')}</p>
                </article>
                <section >
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
