import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './AppLayout.css';

const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/payroll">Payroll</Link></li>
            <li><Link to="/suppliers">Suppliers</Link></li>
            <li><Link to="/user-type">User Type</Link></li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
};

export default AppLayout;
