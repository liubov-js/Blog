import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostPreview from '../../components/PostPreview/PostPreview';
import './Posts.css';
import * as actionCreators from '../../store/actions';
import axios from 'axios';

const Posts = (props) => {
  useEffect(() => {
    const { loadPosts } = props;
    axios.get('http://localhost:3001/articles')
      .then(function(response) {
        loadPosts(response.data);
      });
  }, []);

  const { posts } = props;

  return (
    <div className="Posts">
      {posts.map(post => <PostPreview key={post.id} {...post} />)}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
