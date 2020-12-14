export const PREVFLOOR = 'PREVFLOOR';
export const NEXTFLOOR = 'NEXTFLOOR';
export const DAYNIGHT = 'DAYNIGHT';
export const GET_FIRE = 'GET_FIRE'

const axios = require('axios');

export const prevFloor = () => {
  return {
    type: PREVFLOOR
  };
}

export const nextFloor = () => {
  return {
    type: NEXTFLOOR
  };
}

export const dayNight = () => {
  return {
    type: DAYNIGHT
  }
}

const fireSuccess = (dispatch, result) => {
  dispatch({
    type: GET_FIRE,
    payload: result,
  })
}

export const getFire = (floor) => {
  return (dispatch) => {
    axios.post("http://localhost:8080/api/view/fire",{
      floor: floor
    })
    .then(res => 
      dispatch({
        type: GET_FIRE,
        payload: res.data
      })
    )
    .catch(err => {
      throw(err);
    })
  }
}