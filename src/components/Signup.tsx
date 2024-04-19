import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Consider managing the role as an enum or constants if there are predefined roles
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic front-end validation before sending the request
    if (password !== confirmPassword) {
      console.error("Passwords don't match.");
      return;
    }

    // Create the user object based on your backend requirements
    const newUser = {
      username,
      email,
      password,
      role: userType, // Assuming your backend accepts 'role' in the body
    };

    try {
      // Replace the URL with your backend endpoint
      const response = await axios.post('http://localhost:9090/auth/register', newUser);
      console.log('Registration successful:', response.data);
      
      // You can navigate to the login page or directly log the user in and navigate based on role
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-fixed">
      <div className="w-full max-w-md p-8 space-y-8 backdrop-blur-md bg-black/40 rounded-lg shadow-lg border border-blue-700">
        <h1 className="text-3xl font-bold text-center text-blue-300">Sign Up</h1>
        <form className="space-y-6" onSubmit={handleSignup}>
          <input
            className="w-full px-4 py-2 text-gray-300 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <input
            className="w-full px-4 py-2 text-gray-300 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="text-gray-300">
            <label htmlFor="userType" className="block mb-2 text-sm font-medium">Account Type</label>
            <select
              id="userType"
              name="userType"
              className="block w-full px-3 py-2 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-blue-500 bg-transparent border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-black"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-gray-300">Already have an account?</p>
          <button
            type="button"
            onClick={() => {/* Insert navigation to Login page logic here */}}
            className="mt-2 text-blue-300 hover:text-blue-500"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
