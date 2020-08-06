import React, {Component} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MainHome.scss';
import classNames from 'classnames/bind';
import LegendPage from './../LegendPage/LegendPage.js';
import KrGuidePage from './../KrGuidePage/KrGuidePage.js';
import EnGuidePage from './../EnGuidePage/EnGuidePage.js';
import OneFloorPage from './../OneFloorPage/OneFloorPage.js';
import TwoFloorPage from './../TwoFloorPage/TwoFloorPage.js';
import arrow from './../../images/arrow.png';
import arrow_nega from './../../images/arrow_negative.png';

const cx = classNames.bind(styles);

class MainHome extends Component{
  constructor(props) {
    super(props);
    this.state = {
        floor: 1,
        day: true,
    }
  }

  handleNext = () => {
    this.setState({floor: 2});
  }

  handlePrev = () => {
    this.setState({floor: 1});
  }

  getDate() {
    var date = new Date();

    if(date.getHours() >= 6 && date.getHours() < 19) {
      this.setState({
        day: true,
      });
    } else {
      this.setState({
        day: false,
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.getDate();
    }, 1000)
  }

  render(){
    let textColor = this.state.day ? "black" : "white";

    return (
      <div className={cx('home-back')} style={{color : textColor}}>
        <div className={cx('home-title')}>
          <div className={cx('home-floor-title')}>{this.state.floor}F</div>
          <div className={cx('home-title-KR')}>비상대피안내도</div>
          <div className={cx('home-title-EN')}>Emergency Exit Guide</div>
        </div>
        { this.state.floor == 2 &&
          <div className={cx('left-arrow')} onClick={this.handlePrev}><img src={this.state.day ? arrow : arrow_nega}/></div>
        }
        <div className={cx('home-floor')}>
          { this.state.floor == 1 ?
            <OneFloorPage day={this.state.day}/>
            :
            <TwoFloorPage day={this.state.day}/>
          }
        </div>
        <div className={cx('home-legend')}>
          <LegendPage/>
        </div>
        { this.state.floor == 1 &&
          <div className={cx('right-arrow')} onClick={this.handleNext}><img src={this.state.day ? arrow : arrow_nega}/></div>
        }
        <div className={cx('home-guide')}>
          <div className={cx('home-guide-kr')}>
            <EnGuidePage day={this.state.day}/>
          </div>
          <div className={cx('home-guide-en')}>
            <KrGuidePage day={this.state.day}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHome;
