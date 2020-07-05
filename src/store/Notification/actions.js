import ACTION_TYPES from './types'

export function addNotification({msg}) {
  return { type: ACTION_TYPES.REQ_ADD_NOTIFICATION, msg}
}

export default {
  addNotification
}
