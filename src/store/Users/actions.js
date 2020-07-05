import ACTION_TYPES from './types';

export function addUser({name}) {
  return {type: ACTION_TYPES.REQUEST_ADD_USER, user: { name }};
}

export default {
  addUser
};
