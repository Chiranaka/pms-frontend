import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../services/supplierService';

const Suppliers: React.FC = () => {
  const [suppliers, setSuppliers] = useState<any[]>([]);

  useEffect(() => {
    const getSuppliers = async () => {
      const data = await fetchSuppliers();
      setSuppliers(data);
    };

    getSuppliers();
  }, []);

  return (
    <div>
      <h1>Suppliers Page</h1>
      <ul>
        {suppliers.map(supplier => (
          <li key={supplier.id}>{supplier.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suppliers;
