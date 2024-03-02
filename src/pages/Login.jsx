import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your authentication logic goes here
    // For now, let's assume the login is successful
    alert('Login successful');
    navigate('/budget');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>Login</button>
      </div>
      <p className="text-gray-600 text-xs">No existing account? <Link to="/register" className="text-blue-500">Register here</Link></p>
    </div>
  );
}

export default Login;
