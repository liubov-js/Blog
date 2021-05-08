import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './Comments.css';
import axios from 'axios';

class Comments extends Component {
    state = {
        comments: [],
    }

    loadComments(comments) {
        this.setState({comments})
    }

    componentDidMount() {
        const { postId } = this.props;
        axios.get(`http://localhost:3001/articles/${postId}/comments`)
            .then((response) => {
                this.loadComments(response.data);
            })
    }

    render () {
        const allComments = this.state.comments;
        return (
            <div className="Comments">
                <h4>Comments</h4>
                {allComments.map(cur => 
                    <div className="Comment" key={cur.id}>
                        <section>{cur.body}</section>
                        <Link className="Name" to={`/users/${cur.userId}`}>{cur.authorFullName}</Link>
                        <p className="Date">{moment(cur.createdAt).format('YYYY/MM/DD')}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Comments;