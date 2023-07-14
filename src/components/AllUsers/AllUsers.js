import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actionCreators from '../../store/actions';
import './AllUsers.css';

const AllUsers = (props) => {
  useEffect(() => {
    const { loadUsers } = props;
    axios.get('http://localhost:3001/users')
      .then(function(response) {
        loadUsers(response.data);
      });
  }, []);

  const { users } = props;
  // if (!users) return 'Users wasn\'t found';

  return (
    <div className="AllUsers">
      <Link to="/" className="Home-page">HOME</Link>
      {users.map(cur =>
        <section className="User" key={cur.id} >
          <h3>User {cur.id}</h3>
          <Link to={`/users/${cur.id}`}>{cur.firstName} {cur.lastName}</Link>
        </section>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
 return {
   loadUsers: (users) => dispatch(actionCreators.loadUsers(users)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);