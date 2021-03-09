import React, { Component } from 'react';
import moment from 'moment';

import './Comments.css';
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
            <div className="Comments">
                <h4>Comments</h4>
                {postComments.map(cur => 
                    <div className="Comment" key={cur.id}>
                        <section>{cur.body}</section>
                        <p>{cur.authorFullName}</p>
                        <p className="Date">{moment(cur.createdAt).format('YYYY/MM/DD')}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Comments;