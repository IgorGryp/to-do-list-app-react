import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function Todo({ todo, toggleStarIcon, toggleCheckIcon, checkOffTodo, deleteTask }) {
  return (
    <div className="list-item">
      {/* Star button */}
      <button className="star-button">
        <FontAwesomeIcon
          onClick={() => toggleStarIcon(todo.id)}
          icon={faStar}
          className="star-button-icon"
          style={{
            color: todo.star ? '#f5c650' : null,
          }}
        />
      </button>
      {/* Todo item */}
      <li
        className="task"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.value}
      </li>
      {/* Check box */}
      <button
        onClick={() => {
          toggleCheckIcon(todo.id);
          checkOffTodo(todo.id);
        }}
        className="check-button"
      >
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: todo.check ? '#1f71ff' : null,
          }}
        />
      </button>
      {/* Delete  button */}
      <button className="delete-button" onClick={() => deleteTask(todo.id)}>
        <FontAwesomeIcon icon={faTrashCan} className="delete-button-icon" />
      </button>
    </div>
  );
}

export default Todo;
