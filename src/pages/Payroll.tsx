import React, { useEffect, useState } from 'react';
import { fetchPayrolls } from '../services/payrollService';

const Payroll: React.FC = () => {
  const [payrolls, setPayrolls] = useState<any[]>([]);

  useEffect(() => {
    const getPayrolls = async () => {
      const data = await fetchPayrolls();
      setPayrolls(data);
    };

    getPayrolls();
  }, []);

  return (
    <div>
      <h1>Payroll Page</h1>
      <ul>
        {payrolls.map(payroll => (
          <li key={payroll.id}>{payroll.employeeName}: {payroll.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payroll;
