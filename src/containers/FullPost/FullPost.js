import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './FullPost.css';
import * as actionCreators from '../../store/actions';
import Comments from '../Comments/Comments';

class FullPost extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const { loadPosts, posts } = this.props;
        if (!posts.length) {
            axios.get('http://localhost:3001/articles')
            .then(function(response) {
                loadPosts(response.data);
            })
        } 
    }

    render () {
        const { id } = this.props.match.params; // from URL
        const { posts } = this.props;
        const post = posts.find(post => post.id === Number(id));
        
        if (!post) return 'Post wasn\'t found';

        return (
            <div className="Container">
                <Link to="/" className="HomeLink Block">HOME</Link>
                <article className="FullPost Block">
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
        loadPosts: (articles) => dispatch(actionCreators.loadPosts(articles)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FullPost));
