import { PREVFLOOR, NEXTFLOOR, DAYNIGHT, GET_FIRE} from '../actions';
import {combineReducers} from 'redux';

const floorIntialState = {
  floor: 1,
  day: false,
  fire: [false,false,false,false,false]
}

var date = new Date();

const floor = (state = floorIntialState, action) => {
  switch (action.type) {
    case PREVFLOOR:
      return Object.assign({}, state, {
        ...state,
        floor: state.floor-1
      })
    case NEXTFLOOR:
      return Object.assign({}, state, {
        ...state,
        floor: state.floor+1
      })
    case DAYNIGHT:
      return Object.assign({}, state, {
        ...state,
        day: (date.getHours() >= 6 && date.getHours() < 19) ? true : false
      })
    case GET_FIRE:
      const fire = [];
      for(let i in action.payload)
        fire.push(action.payload[i])
      return {
        ...state,
        fire: fire
      }
    default:
      return state;
  }
}

const floorApp = combineReducers({
  floor
});

export default floorApp