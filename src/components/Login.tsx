import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useRoleBasedRedirect from '../hooks/userRole';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'admin' | 'user'>('user');
  const navigate = useNavigate();

  // Define a state for the session, initially set to null
  const [session, setSession] = useState<{ user?: { role: 'admin' | 'user' } } | null>(null);

  // Use the hook at the top level of your component
  useRoleBasedRedirect(session); // Pass the session state to the hook

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9090/auth/login', { username, password });
      // Update session state with role obtained from the response
      setSession({ user: { role: response.data.role } });

    } catch (error) {
      console.error('Login failed:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  const handleSignupNavigation = () => {
    navigate('/signup');
  };
  
  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'admin' || value === 'user') {
      setUserType(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-fixed">
      <div className="w-full max-w-md p-8 space-y-8 backdrop-blur-md bg-black/40 rounded-lg shadow-lg border border-blue-700">
        <h1 className="text-3xl font-bold text-center text-blue-300">Login to Your Account</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            className="w-full px-4 py-2 text-gray-300 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 text-gray-300 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-gray-300">
            <label htmlFor="userType" className="block mb-2 text-sm font-medium">User Type</label>
            <select
              id="userType"
              name="userType"
              className="block w-full px-3 py-2 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-blue-500 bg-transparent border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-black"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">Don't have an account?</p>
          <button
            type="button"
            onClick={handleSignupNavigation}
            className="text-blue-300 hover:text-blue-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
