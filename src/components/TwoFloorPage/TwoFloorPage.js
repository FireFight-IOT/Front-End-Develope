import React, {Component} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './TwoFloorPage.scss';
import classNames from 'classnames/bind';
import stair from './../../images/stair.png';
import door from './../../images/door.png';
import stair_nega from './../../images/stair_negative.png';
import door_nega from './../../images/door_negative.png';

const cx = classNames.bind(styles);
const axios = require('axios');

class TwoFloorPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      leftStair: false,
      rightStair: false,
      oneRoom: false,
      twoRoom: false,
      threeRoom: false,
    };
    this.getFloorFire = this.getFloorFire.bind(this);
  }

  getFloorFire() {
    axios.post("http://localhost:8080/api/view/fire", {
      floor: 2,
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        leftStair: response.data.left,
        rightStair: response.data.right,
        oneRoom: response.data.one,
        twoRoom: response.data.two,
        threeRoom: response.data.three,
      })
    })
    .catch((error) => {
      console.log(error);
    })
    // this.setState({
    //   leftStair: false,
    //   rightStair: false,
    //   oneRoom: false,
    //   twoRoom: false,
    //   threeRoom: false,
    // })
  }

  componentDidMount() {
    // setInterval(() => {
      this.getFloorFire();
    // }, 100)
  }

  render(){
    const { day } = this.props;

    let oneRoomColor = this.state.oneRoom ? "red" : day ? "white" : "black";
    let twoRoomColor = this.state.twoRoom ? "red" : day ? "white" : "black";
    let threeRoomColor = this.state.threeRoom ? "red" : day ? "white" : "black";
    let leftStairColor = this.state.leftStair ? "red" : day ? "white" : "black";
    let rightStairColor = this.state.rightStair ? "red" : day ? "white" : "black";
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
}

export default TwoFloorPage;
