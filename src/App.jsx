import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('todo');

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">투두리스트</h1>
        <div className="nav-links">
          <button onClick={() => setCurrentView('todo')} className={currentView === 'todo' ? 'active' : ''}>투두리스트</button>
          <button onClick={() => setCurrentView('login')} className={currentView === 'login' ? 'active' : ''}>교사 로그인</button>
          <button onClick={() => setCurrentView('signup')} className={currentView === 'signup' ? 'active' : ''}>학생 가입</button>
        </div>
      </nav>
      
      <main className="main-content">
        {currentView === 'todo' && <TodoList />}
        {currentView === 'login' && <Login />}
        {currentView === 'signup' && <Signup />}
      </main>
    </div>
  );
}

export default App;
