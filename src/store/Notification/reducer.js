import _initstate from './state'
import ACTION_TYPES from './types'

export default (_state = _initstate, action) => {
  const state = {..._state}
  console.log('REDUCER Notification ', action.type, action)
  switch (action.type) {
    case ACTION_TYPES.RES_ADD_NOTIFICATION:
      state.list.push(action.msg)
      return state
    default:
      return state
  }
}

