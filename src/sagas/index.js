import { all } from "redux-saga/effects";

import Todo from "./Todo";
import Notification from './Notification'

export default function* rootSagas(context) {
  return yield all([...Todo(context), ...Notification(context)]);
}
