import React from 'react';
import styles from './EnGuidePage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EnGuidePage = ({ day }) =>{
  const fire = `to attract attention and damp down
                     the flames by using an extinguisher`


  const escape = `Keep Calm and Move towards the exit.
                     Please help elders and kids, and
                     evacuate through a stainway.
                    `

  let textColor = day ? "#0E540D" : "#00FFFF";

  return (
    <div className={cx('enguide-back')}>
      <div className={cx('enguide-item')}>
        <div className={cx('enguide-call')} style={{color: textColor}}>Call ‘119’</div>
        <div className={cx('enguide-text')}>The fire station at 119</div>
      </div>
      <div className={cx('enguide-item')}>
        <div className={cx('enguide-fire')} style={{color: textColor}}>Shout ‘Fire!’</div>
        <div className={cx('enguide-text')}>Shout <span style={{color:"red",fontWeight:"bold"}}>“Fire!”</span> {fire}</div>
      </div>
      <div className={cx('enguide-item')}>
        <div className={cx('enguide-escape')} style={{color: textColor}}>Escape</div>
        <div className={cx('enguide-text')}>{escape}<span style={{color:"red",fontWeight:"bold", marginLeft: "3px"}}>(No Use Elevator)</span></div>
      </div>
    </div>
  );
}

export default EnGuidePage;
