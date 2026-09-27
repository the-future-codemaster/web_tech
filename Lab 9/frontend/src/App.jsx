import React, { Component } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5001/api/todos');
      this.setState({ todos: response.data });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    
    if (this.state.newTodo.trim() === '') {
      return;
    }

    const newTask = {
      task: this.state.newTodo,
      completed: false
    };

    try {
      const response = await axios.post('http://127.0.0.1:5001/api/todos', newTask);
      
      this.setState(prevState => ({
        todos: [response.data, ...prevState.todos],
        newTodo: ''
      }));
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task: ' + error.message);
    }
  };

  toggleComplete = async (id, currentStatus) => {
    try {
      const response = await axios.put(`http://127.0.0.1:5001/api/todos/${id}`, {
        completed: !currentStatus
      });
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => 
          todo._id === id ? response.data : todo
        )
      }));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  deleteTask = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5001/api/todos/${id}`);
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo._id !== id)
      }));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MERN Todo App (Lab 9)</h1>
        </header>
        <main className="App-main">
          <TaskForm 
            newTodo={this.state.newTodo} 
            handleInputChange={this.handleInputChange} 
            handleSubmit={this.handleSubmit} 
          />
          <TaskList 
            todos={this.state.todos} 
            toggleComplete={this.toggleComplete}
            deleteTask={this.deleteTask}
          />
        </main>
      </div>
    );
  }
}

export default App;
