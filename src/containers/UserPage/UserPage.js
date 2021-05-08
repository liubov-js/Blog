import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import './UserPage.css';

class UserPage extends Component {
    state = {
        users: [],
    }

    loadUser(users) {
        this.setState({users})
    }

    componentDidMount() {
        const { userId } = this.props.match.params;
        axios.get(`http://localhost:3001/users/${userId}`)
            .then((response) => {
                this.loadUser(response.data);
            })
        
    }

    render () {
        const user = this.state.users;
        if (!user) return 'User wasn\'t found';
        
        return (
            <div className="UserPage">
                <Link to="/" className="Links">HOME</Link>
                <article className="UserInfo">
                    <h3>User page</h3>
                    <p>First name: {user.firstName}</p>
                    <p>Last name: {user.lastName}</p>
                    <p>Gender: {user.gender}</p>
                </article>
                <Link to="/users" className="Links">All users list</Link>
            </div>
        );
    }
}

export default UserPage;