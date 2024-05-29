import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserTypeSelector.css';

const UserTypeSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (userType: string) => {
    // Navigate to the respective user type page
    navigate(`/${userType.toLowerCase()}`);
  };

  return (
    <div className="user-type-selector">
      <h2>Select Your User Type</h2>
      <div className="user-type-buttons">
        <button onClick={() => handleSelection('Staff')}>Staff</button>
        <button onClick={() => handleSelection('Employee')}>Employee</button>
        <button onClick={() => handleSelection('Customer')}>Customer</button>
        <button onClick={() => handleSelection('Supplier')}>Supplier</button>
      </div>
    </div>
  );
};

export default UserTypeSelector;
