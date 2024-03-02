import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Save the registration details to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    // Redirect to login page after registration
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRegister}>Register</button>
      </div>
      <p className="text-gray-600 text-xs">Have an existing account? <Link to="/" className="text-blue-500">Login here</Link></p>
    </div>
  );
}

export default Register;
