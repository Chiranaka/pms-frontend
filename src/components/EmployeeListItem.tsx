import React from 'react';
import { Employee } from '../types/Employee';

type EmployeeListItemProps = {
    employee: Employee;
};

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({ employee }) => {

   return (
      <div className= "bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
            <div>
               <h2 className="text-xl font-medium">{employee.name}</h2>
               <p className="text-gray-600">{employee.role}</p>
           </div>
      </div>
   ); 
};

export default EmployeeListItem;