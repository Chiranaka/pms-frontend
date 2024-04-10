import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement your login logic here
    console.log('Logging in with username:', username, 'password:', password, 'as:', userType);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 glass-effect">
        <h1 className="text-3xl font-bold text-center text-white">Login to Your Account</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            className="w-full px-4 py-2 text-black rounded-md"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 text-black rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-white">
            <label htmlFor="userType" className="block mb-2 text-sm font-medium">User Type</label>
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
            className="w-full px-4 py-2 font-bold text-black bg-white rounded-md hover:bg-gray-300"
          >
            Log in
          </button>
        </form>
        <div className="text-center">
          <p className="text-white">Don't have an account?</p>
          {/* TODO: Implement navigation to Sign Up page */}
          <button className="text-blue-300 hover:text-blue-500">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
