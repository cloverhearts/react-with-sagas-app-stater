import UUID from 'uuid/v4';
import ACTION_TYPES from './types';
import initializeState from './state';

export default (state = initializeState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPES.REQUEST_ADD_USER:
      console.log('users ', state)
      newState.users.push({...action.user, id: UUID()});
      return {...newState};
    default:
      return state;
  }
};
