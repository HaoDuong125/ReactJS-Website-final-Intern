import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute, withRouter } from 'react-router'
import ListP from './containers/ProductContainer/delete';
import CreateP from './containers/ProductContainer/create';
import UpdateP from './containers/ProductContainer/update';


import ListC from './containers/CategoryContainer/delete';
import CreateC from './containers/CategoryContainer/create';
import UpdateC from './containers/CategoryContainer/update';

import NotFoundPage from './components/NotFoundPage';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ListP}>
            <IndexRoute to="/posts"/>
        </Route>
        <Route path="/posts/createProduct" component={withRouter(CreateP)}/>
        <Route path="/posts/updateProduct/:postId" component={withRouter(UpdateP)}/>
        



        <Route path="/Category" component={ListC}>
            <IndexRoute to="/posts/Category"/>
        </Route>
        <Route path="/posts/Category/createCategory" component={withRouter(CreateC)}/>
        <Route path="/posts/Category/updateCategory/:postId" component={withRouter(UpdateC)}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}
