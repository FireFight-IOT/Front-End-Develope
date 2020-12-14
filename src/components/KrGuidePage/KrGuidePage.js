import React from 'react';
import styles from './KrGuidePage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const KrGuidePage = ({ day }) =>{
  const asd = `침착하게 환자, 노약자를 도와 비상구로 대피
                발화점 반대방향 계단을 이용하여 대피
              `

  let textColor = day ? "#0E540D" : "#00FFFF";

  return (
    <div className={cx('krguide-back')}>
      <div className={cx('krguide-item')}>
        <div className={cx('krguide-title')} style={{color: textColor}}>화재신고</div>
        <div className={cx('krguide-text')}>소방서 119</div>
      </div>
      <div className={cx('krguide-item')}>
        <div className={cx('krguide-title')} style={{color: textColor}}>초기대응</div>
        <div className={cx('krguide-text')}><span style={{color:"red",fontWeight:"bold"}}>"불이야"</span> 하고 주위에 알리고 소화기로 초기 진화</div>
      </div>
      <div className={cx('krguide-item')}>
        <div className={cx('krguide-title')} style={{color: textColor}}>대피요령</div>
        <div className={cx('krguide-text')}>{asd}<span style={{color:"red",fontWeight:"bold", marginLeft:"10px"}}>(엘레베이터 탑승 금지)</span></div>
      </div>
    </div>
  );
}

export default KrGuidePage;
