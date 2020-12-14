import React, {useEffect} from 'react';
import styles from './MainHome.scss';
import classNames from 'classnames/bind';
import LegendPage from './../LegendPage/LegendPage.js';
import KrGuidePage from './../KrGuidePage/KrGuidePage.js';
import EnGuidePage from './../EnGuidePage/EnGuidePage.js';
import OneFloorPage from './../OneFloorPage/OneFloorPage.js';
import TwoFloorPage from './../TwoFloorPage/TwoFloorPage.js';
import arrow from './../../images/arrow.png';
import arrow_nega from './../../images/arrow_negative.png';
import { useSelector, useDispatch } from 'react-redux';
import {prevFloor, nextFloor, dayNight} from '../../actions';

const cx = classNames.bind(styles);

const MainHome = ( ) => {  
  const floor = useSelector(state => state.floor.floor);
  const day = useSelector(state => state.floor.day);

  let textColor = day ? "black" : "white";
  let width = "500px";
  let height = "400px";

  document.body.style = day ? 'background: white;': 'background: black;';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dayNight());
  }, [])

  return (
    <div className={cx('home-back')} style={{color : textColor}}>
      <div className={cx('home-title')}>
        <div className={cx('home-floor-title')}>{floor}F</div>
        <div className={cx('home-title-KR')}>비상대피안내도</div>
        <div className={cx('home-title-EN')}>Emergency Exit Guide</div>
      </div>
      { floor == 2 &&
        <div className={cx('left-arrow')}><img src={day ? arrow : arrow_nega}  onClick={() => {dispatch(prevFloor())}}/></div>
      }
      <div className={cx('home-floor')}>
        { floor == 1 ?
          <OneFloorPage day={day}/>
          :
          <TwoFloorPage day={day}/>
        }
      </div>
      <div className={cx('home-legend')}>
        <LegendPage/>
      </div>
      { floor == 1 &&
        <div className={cx('right-arrow')}><img src={day ? arrow : arrow_nega}  onClick={() => {dispatch(nextFloor())}}/></div>
      }
      <div className={cx('home-guide')}>
        <div className={cx('home-guide-kr')}>
          <EnGuidePage day={day}/>
        </div>
        <div className={cx('home-guide-en')}>
          <KrGuidePage day={day}/>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
