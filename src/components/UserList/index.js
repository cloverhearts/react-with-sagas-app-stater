import React from "react";
import {useSelector} from 'react-redux';

export default props => {
  const lists = useSelector(state => [...state.users.users])
  return (
    <ul>
      {lists.map((user, index) => {
        return <div key={user.id}>{user.name}</div>
      })}
    </ul>
  );
};
