import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <Link to="/articles" exact="true" />
                            {/* <Link to="/article/:id" /> */}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/articles" component={Posts} />
                        <Route render={() => <h1>Not found</h1>} />
                        {/* <Route path="/article/:id" component={} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Blog;