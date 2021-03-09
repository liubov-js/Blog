import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
                <div>
                    <Switch>
                        <Route path="/" component={Posts} exact />
                        <Route path="/articles/:id" component={FullPost} />
                        <Route render={() => <h1>Not found</h1>} />
                    </Switch>
                </div>
        );
    }
}

export default Blog;