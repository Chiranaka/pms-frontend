import React, { useEffect, useState } from 'react';
import { fetchEmployees, addEmployee, deleteEmployee } from '../services/employeeService';
import { Employee } from '../types/Employee';

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, 'id'>>({
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  });

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };

    getEmployees();
  }, []);

  const handleAddEmployee = async () => {
    const addedEmployee = await addEmployee({ ...newEmployee, id: '' });
    setEmployees([...employees, addedEmployee]);
    setNewEmployee({ firstName: '', lastName: '', email: '', position: '' });
  };

  const handleDeleteEmployee = async (id: string) => {
    await deleteEmployee(id);
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div>
      <h1>Employees Page</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.email} - {employee.position}
            <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add New Employee</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newEmployee.firstName}
          onChange={e => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newEmployee.lastName}
          onChange={e => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={e => setNewEmployee({ ...newEmployee, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.position}
          onChange={e => setNewEmployee({ ...newEmployee, position: e.target.value })}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
    </div>
  );
};

export default Employees;
