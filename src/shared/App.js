import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import styles from './../styles/main.scss';
import classNames from 'classnames/bind';
import { Home } from './../pages';

const cx = classNames.bind(styles);

class App extends Component {

  getDate() {
    var date = new Date();

    if(date.getHours() >= 6 && date.getHours() < 19) {
      document.body.style = 'background: white;';
    } else {
      document.body.style = 'background: black;';
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.getDate();
    }, 1000)
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
