import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Projects from './pages/Projects';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Suppliers from './pages/Suppliers';
import UserType from './pages/UserType';
import Staff from './pages/Staff';
import Employee from './pages/Employee';
import Customer from './pages/Customer';
import Supplier from './pages/Supplier';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/user-type" element={<UserType />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/supplier" element={<Supplier />} />
    </Routes>
  );
};

export default AppRoutes;
