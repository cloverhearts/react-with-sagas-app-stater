import React from "react";
import Todo from "../Todo";
import {useSelector} from 'react-redux';

export default props => {
  const todos = useSelector(state => state.todos.list)

  return (
    <ul>
      {todos.map(todo => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
