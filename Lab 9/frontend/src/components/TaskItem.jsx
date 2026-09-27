import React from 'react';

const TaskItem = ({ todo, toggleComplete, deleteTask }) => {
  return (
    <li className={`task-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.task}</span>
      <div className="task-actions">
        <button className="update-btn" onClick={() => toggleComplete(todo._id, todo.completed)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(todo._id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
