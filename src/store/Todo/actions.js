import ACTION_TYPES from './types';

export function addTodo({title, hasCompleted}) {
  const todo = {title: title || '', hasCompleted};
  return {type: ACTION_TYPES.REQUEST_ADD_TODO, todo};
}

export function resAddTodo(todo) {
  return { type: ACTION_TYPES.RESPONSE_ADD_TODO, todo}
}

export function delTodo({id}) {
  return {type: ACTION_TYPES.REQUEST_DEL_TODO, id};
}

export default {
  addTodo,
  resAddTodo,
  delTodo,
};
