import React, {useState} from 'react';

export default props => {
  const {id, title, hasCompleted, createdAt} = props;
  const [checkedCompleted, setCompleted] = useState(hasCompleted);

  const onChange = () => {
    setCompleted(!checkedCompleted);
  };

  return (
    <div data-todo-id={id}>
      <input type={`checkbox`} checked={checkedCompleted} onChange={onChange}/>
      {title} - {createdAt}
    </div>
  );
};
