import React, {useEffect, useState} from 'react';
import styles from './TwoFloorPage.scss';
import classNames from 'classnames/bind';
import stair from './../../images/stair.png';
import door from './../../images/door.png';
import stair_nega from './../../images/stair_negative.png';
import door_nega from './../../images/door_negative.png';
import { useSelector, useDispatch } from 'react-redux';
import { getFire } from './../../actions';

const cx = classNames.bind(styles);

const TwoFloorPage = ({ day }) => {
  const [leftStair, setLeftStair] = useState(false),
        [rightStair, setRightStair] = useState(false),
        [oneRoom, setOneRoom] = useState(false),
        [twoRoom, setTwoRoom] = useState(false),
        [threeRoom, setThreeRoom] = useState(false);

  const fire = useSelector(state => state.floor.fire);

  const dispatch = useDispatch();

  useEffect(() => {
    getFire(2)(dispatch)
  }, [])

  setTimeout(() => {
    setLeftStair(fire[0]);
    setRightStair(fire[1]);
    setOneRoom(fire[2]);
    setTwoRoom(fire[3]);
    setThreeRoom(fire[4]);
  }, 100);
  
  let oneRoomColor = oneRoom ? "red" : day ? "white" : "black";
  let twoRoomColor = twoRoom ? "red" : day ? "white" : "black";
  let threeRoomColor = threeRoom ? "red" : day ? "white" : "black";
  let leftStairColor = leftStair ? "red" : day ? "white" : "black";
  let rightStairColor = rightStair ? "red" : day ? "white" : "black";
  let lineColor = day ? "black" : "white";

  return (
    <div style={{borderColor: lineColor}} className={cx('twofloor-back')}>
      <div className={cx('left-stair')}><img style={{backgroundColor: leftStairColor, borderColor: lineColor}} src={day ? stair : stair_nega} id="stair1"/></div>
      <div id="room1" style={{backgroundColor: oneRoomColor, borderColor: lineColor}} className={cx('room')}><img src={day ? door : door_nega}/></div>
      <div id="room2" style={{backgroundColor: twoRoomColor, borderColor: lineColor}} className={cx('room')}><img src={day ? door : door_nega}/></div>
      <div id="room3" style={{backgroundColor: threeRoomColor, borderColor: lineColor}} className={cx('room')}><img src={day ? door : door_nega}/></div>
      <div className={cx('right-stair')}><img style={{backgroundColor: rightStairColor, borderColor: lineColor}} src={day ? stair : stair_nega} id="stair2"/></div>
      <div className={cx('left-extinguisher')}></div>
      <div className={cx('twfloor-here')}></div>
      <div className={cx('onfloor-hydrant')}></div>
      <div className={cx('right-extinguisher')}></div>
    </div>
  );
}

export default TwoFloorPage;
