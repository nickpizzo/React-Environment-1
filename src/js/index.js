import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
      {/* <IndexRoute component={Landing}/> */}

  </Router>
  , document.getElementById('root'));
