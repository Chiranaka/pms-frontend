import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../services/employeeService';

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };

    getEmployees();
  }, []);

  return (
    <div>
      <h1>Employees Page</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
