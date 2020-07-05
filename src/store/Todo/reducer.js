import UUID from 'uuid/v4'
import ACTION_TYPES from './types'
import _initializeState from './state'

export default (_state = _initializeState, action) => {
  const state = {..._state}
  console.log('REDUCER Todo ', action.type, action)
  switch (action.type) {
    case ACTION_TYPES.RESPONSE_ADD_TODO:
      const todo = {...action.todo, id: UUID(), createdAt: new Date().toISOString()}
      state.list = [...state.list, todo];
      return state
    case ACTION_TYPES.REQUEST_DEL_TODO:
      return state;
    default:
      return state;
  }
};
