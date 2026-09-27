import React from 'react';

const TaskForm = ({ newTodo, handleInputChange, handleSubmit }) => {
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={newTodo}
        onChange={handleInputChange}
        className="task-input"
      />
      <button type="submit" className="task-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;
