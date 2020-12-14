import React from 'react';
import styles from './LegendPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LegendPage = () => {
  return (
    <div className={cx('legend-back')}>
      <div className={cx('legend-item')}>
        <div className={cx('legend-icon', 'here')}></div>
        <div className={cx('legend-text')}>
          <div className={cx('legend-text-KR')}>현위치</div>
          <div className={cx('legend-text-EN')}>Location</div>
        </div>
      </div>
      <div className={cx('legend-item')}>
        <div className={cx('legend-icon', 'extinguisher')}></div>
        <div className={cx('legend-text')}>
          <div className={cx('legend-text-KR')}>소화기</div>
          <div className={cx('legend-text-EN')}>Fire extinguisher</div>
        </div>
      </div>
      <div className={cx('legend-item')}>
        <div className={cx('legend-icon')}></div>
        <div className={cx('legend-text')}>
          <div className={cx('legend-text-KR')}>소화전</div>
          <div className={cx('legend-text-EN')}>Fire hydrant</div>
        </div>
      </div>
    </div>
  );
}

export default LegendPage;
