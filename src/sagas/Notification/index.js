import { takeLatest, put } from 'redux-saga/effects'
import ACTION_TYPES from '../../store/Notification/types'

function* addNotification(context, action) {
  try {
    console.log('Saga Notification action ', action.type, action)
    yield put({ type: ACTION_TYPES.RES_ADD_NOTIFICATION, msg: action.msg || ''})
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga(externalContext) {
  yield takeLatest(ACTION_TYPES.REQ_ADD_NOTIFICATION, addNotification, externalContext)
}
