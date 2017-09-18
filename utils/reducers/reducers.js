import { TICK, ADD } from '../actions/actionTypes';


const reducer = (state = {}, action) => {
  switch (action.type) {
    case TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    case ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default: return state
  }
}

export default reducer
