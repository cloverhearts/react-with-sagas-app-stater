import {delay} from "redux-saga/effects";
import {takeEvery, put} from "redux-saga/effects";
import ActionTypes from "../../store/Todo/types";
import Actions from "../../store/Todo/actions";
import NotificationActions from '../../store/Notification/actions';

function* addTodo(context, action) {
  try {
    console.log('Saga Todo action ', action.type, action)
    yield delay(100);
    action.todo.title = action.todo.title + " + SAGAS";
    yield put(Actions.resAddTodo(action.todo));
    yield put(NotificationActions.addNotification({msg: `${action.todo.title} 이 추가되었습니다`}))
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga(externalContext) {
  yield takeEvery(ActionTypes.REQUEST_ADD_TODO, addTodo, externalContext);
}
