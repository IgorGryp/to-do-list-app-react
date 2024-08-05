import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function Todo({ todo, toggleStarIcon, toggleCheckIcon, checkOffTodo, deleteTask }) {
  return (
    <div className="list-item">
      {/* Todo item */}
      <li
        className="task"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {/* Star button */}
        <FontAwesomeIcon
          onClick={() => toggleStarIcon(todo.id)}
          icon={faStar}
          className="star-button-icon"
          style={{
            color: todo.star ? '#ffe180' : null,
          }}
        />
        {/* To do text */}
        <p>{todo.value}</p>

        {/* Check box */}
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => {
            toggleCheckIcon(todo.id);
            checkOffTodo(todo.id);
          }}
          className="check-button-icon"
          style={{
            color: todo.check ? '#71ff78' : null,
          }}
        />

        {/* Delete  button */}
        <FontAwesomeIcon
          icon={faTrashCan}
          className="delete-button-icon"
          onClick={() => deleteTask(todo.id)}
        />
      </li>
    </div>
  );
}

export default Todo;
