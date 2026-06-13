import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement Firebase login logic for teachers
    console.log('Teacher login:', email);
  };

  return (
    <div className="auth-container">
      <h2>교사 로그인</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="이메일" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
