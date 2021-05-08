import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Posts from './containers/Posts/Posts';
import FullPost from './containers/FullPost/FullPost';
import UserPage from './containers/UserPage/UserPage';
import AllUsers from './containers/AllUsers/AllUsers';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Posts} exact />
            <Route path="/articles/:id" component={FullPost} />
            <Route path="/users/:userId" component={UserPage} />
            <Route path="/users" component={AllUsers} />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
