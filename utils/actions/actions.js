import { ADD, TICK } from './actionTypes';

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: ADD })
}
