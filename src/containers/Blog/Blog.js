import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <BrowserRouter>
                
                    <Switch>
                        <Route path="/" component={Posts} exact />
                        <Route path="/articles/:id" component={FullPost} />
                        <Route render={() => <h1>Not found</h1>} />
                        
                    </Switch>
                
            </BrowserRouter>
        );
    }
}

export default Blog;