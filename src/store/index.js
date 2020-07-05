import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todos from "./Todo";
import users from "./Users";
import notifications from './Notification'
import rootSagas from "../sagas";

function run(context = {}) {
  const sagaMiddleware = createSagaMiddleware({ context });
  const store = createStore(
    combineReducers({ todos: todos.reducer, users: users.reducer, notifications: notifications.reducer }),
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSagas, context);
  return store;
}
export default run;
