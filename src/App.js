import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import Todolist from './Todolist';
import ToDoImg from './images/todo-img.png';

function App() {
  const [userInput, setUserInput] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');

  // Function to handle category change
  function handleCategoryChange(e) {
    setCurrentCategory(e.target.value);
  }

  // Function to save input value from a user
  function handleInputChange(e) {
    setUserInput(e.target.value);
  }

  /* ------------------------------------------------------------------------------------------ */

  // Adds a new task to the ToDoList array when button is clicked
  function addTaskByButtonClick() {
    // Creates object for new task
    const todo = {
      id: uuidv4(),
      value: userInput,
      completed: false,
      star: false,
      check: false,
    };
    userInput && setToDoList([...toDoList, todo]);
    setUserInput('');
  }

  // Adds a new task to the ToDoList array when Enter is pressed
  function addTaskByEnterKeyPress(e) {
    if (e.key === 'Enter' && userInput) {
      // Creates object for new task
      const todo = {
        id: uuidv4(),
        value: userInput,
        completed: false,
        star: false,
        check: false,
      };
      setToDoList([...toDoList, todo]);
      setUserInput('');
    }
  }

  /* ------------------------------------------------------------------------------------------ */

  // Checks off a todo with star icon
  function toggleStarIcon(id) {
    setToDoList((prevList) =>
      prevList.map((todo) => (todo.id === id ? { ...todo, star: !todo.star } : todo))
    );
  }
  // Checks off a todo in the list with a check mark
  function toggleCheckIcon(id) {
    setToDoList((prevList) =>
      prevList.map((todo) => (todo.id === id ? { ...todo, check: !todo.check } : todo))
    );
  }
  // Checks off a todo in the list by crossing a line through it
  function checkOffTodo(id) {
    setToDoList((prevList) =>
      prevList.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }
  // Deletes task from the list
  function deleteTask(id) {
    setToDoList((prevList) => prevList.filter((todo) => todo.id !== id));
  }

  /* ------------------------------------------------------------------------------------------ */

  // Filter and sort todos based on the current category
  const filteredTodos = (() => {
    switch (currentCategory) {
      case 'completed':
        return toDoList.filter((todo) => todo.completed);
      case 'uncompleted':
        return toDoList.filter((todo) => !todo.completed);
      case 'priority':
        return toDoList.filter((todo) => todo.star);
      default:
        return toDoList;
    }
  })();

  /* ------------------------------------------------------------------------------------------ */

  return (
    <main className="App">
      <section className="main-content">
        <h1>
          <img src={ToDoImg} alt="" />
        </h1>

        {/* Input field */}
        <div className="input">
          <input
            type="text"
            name="todo"
            onChange={handleInputChange}
            onKeyDown={addTaskByEnterKeyPress}
            value={userInput}
            placeholder="New task..."
            autoFocus
          />

          {/* Add button */}
          <button className="add-button">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="add-button-icon"
              onClick={addTaskByButtonClick}
            />
          </button>
        </div>

        {/* Category selector */}
        <div className="category-selector">
          <select id="category-select" value={currentCategory} onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        {/* To Do list */}
        <Todolist
          toDoList={filteredTodos}
          toggleStarIcon={toggleStarIcon}
          toggleCheckIcon={toggleCheckIcon}
          checkOffTodo={checkOffTodo}
          deleteTask={deleteTask}
        />
      </section>
    </main>
  );
}

export default App;
