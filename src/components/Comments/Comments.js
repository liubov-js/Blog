import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Comments.css';
import axios from 'axios';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  const loadComments = (comments) => {
    setComments(comments);
  };

  useEffect(() => {
    const { postId } = props;
    axios.get(`http://localhost:3001/articles/${postId}/comments`)
      .then((response) => {
        loadComments(response.data);
      })
  }, []);

  return (
    <div className="Comments">
      <h4>Comments</h4>
      {comments.map(cur =>
        <div className="Comment" key={cur.id}>
          <section>{cur.body}</section>
          <Link className="Name" to={`/users/${cur.userId}`}>{cur.authorFullName}</Link>
          <p className="Date">{moment(cur.createdAt).format('YYYY/MM/DD')}</p>
        </div>
      )}
    </div>
  );
}

export default Comments;