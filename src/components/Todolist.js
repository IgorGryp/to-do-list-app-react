import Todo from './Todo';

function Todolist({ toDoList, toggleStarIcon, toggleCheckIcon, checkOffTodo, deleteTask }) {
  // Maps over the tasks in toDoList array and displays them  in App.js
  return (
    <div className="todo-list">
      {toDoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleStarIcon={toggleStarIcon}
          toggleCheckIcon={toggleCheckIcon}
          checkOffTodo={checkOffTodo}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Todolist;
