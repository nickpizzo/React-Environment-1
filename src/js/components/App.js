import React, { Component } from 'react';

import '../../css/partials/reset.scss';
import '../../css/app.scss';

import HelloWorld from './HelloWorld';

var App = (props) => {
  return (
    <div className="container">
        <HelloWorld/>
        {props.children}

    </div>
  );
}

export default App;
