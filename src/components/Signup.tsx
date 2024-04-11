import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Creating account with email:', email, 'username:', username, 'password:', password, 'as:', userType);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="glass-effect">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-6">
        <input
            className="w-full px-4 py-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 rounded-md"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 rounded-md"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
           <div>
            <label htmlFor="userType" className="block mb-2 text-sm font-medium">Account Type</label>
            <select
              id="userType"
              name="userType"
              className="block w-full px-3 py-2 rounded-md select-dropdown"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p>Already have an account?</p>
          <button
            type="button"
            onClick={() => {/* Insert navigation to Login page logic here */}}
            className="text-blue-300 hover:text-blue-500"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
