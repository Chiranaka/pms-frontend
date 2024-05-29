import React from 'react';
import UserTypeSelector from '../components/specific/UserTypeSelector';
import './global.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Project Management System</h1>
      </header>
      <main className="home-main">
        <UserTypeSelector />
      </main>
    </div>
  );
};

export default Home;
