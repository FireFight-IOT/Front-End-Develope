import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import styles from './../styles/main.scss';
import classNames from 'classnames/bind';
import { Home } from './../pages';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
