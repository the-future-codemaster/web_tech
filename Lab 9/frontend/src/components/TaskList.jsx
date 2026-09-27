import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ todos, toggleComplete, deleteTask }) => {
  if (todos.length === 0) {
    return <p className="empty-list">No tasks yet. Add one!</p>;
  }

  return (
    <ul className="task-list">
      {todos.map(todo => (
        <TaskItem 
          key={todo._id} 
          todo={todo} 
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
