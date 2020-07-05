import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import Notifications from "./components/NotificationList";
import { useDispatch } from "react-redux";
import ProviderWithContext from "./components/Platform/ProviderWithContext";
import TodoActions from "../src/store/Todo/actions";
import UserActions from "../src/store/Users/actions";
import NotificationActions from '../src/store/Notification/actions';

function AppendButton(props) {
  const dispatch = useDispatch();
  const onClick = e => {
    dispatch(TodoActions.addTodo({ title: "Hello CloverHearts", hasCompleted: false }));
  };
  return <button onClick={onClick}>Add todo</button>;
}

function AddUser(props) {
  const dispatch = useDispatch();
  const onClick = e => {
    dispatch(UserActions.addUser({ name: "New User" }));
    dispatch(NotificationActions.addNotification({msg: 'User 추가됨'}));
  };
  return <button onClick={onClick}>Add user</button>;
}

function App() {
  return (
    <ProviderWithContext>
      <div className="App">
        <AppendButton />
        <div className={`notification`}>
          <Notifications />
        </div>
        <AddUser />
        <div>
          Todo list
          <TodoList />
        </div>
        <div>
          Users
          <UserList />
        </div>
      </div>
    </ProviderWithContext>
  );
}

export default App;
