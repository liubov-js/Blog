import React, { Component } from 'react';

import comments from '../../../comments.json';

class Comments extends Component {
    state = {
        comments: [],
    }

    loadComments() {
        this.setState({comments})
    }

    componentDidMount() {
        this.loadComments();
    }

    render () {
        const postId = this.props.postId;
        const allComments = this.state.comments;
        const postComments = allComments.filter(comment => comment.articleId === Number(postId));
        return (
            <div className="Comments">{postComments.map(cur => 
            <div key={cur.id}>
                <p>{cur.body}</p>
                <p>{cur.authorFullName}</p>
                <p className="Date">{cur.createdAt}</p>
            </div>)}</div>
        );
    }
}

export default Comments;