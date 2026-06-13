import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    // TODO: Implement Firebase Create logic
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    // TODO: Implement Firebase Update logic
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    // TODO: Implement Firebase Delete logic
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>할 일 목록</h2>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          placeholder="새로운 할 일..." 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
        />
        <button type="submit">추가</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleToggleTodo(todo.id)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
