import api from './api';
import { Supplier } from '../types/Supplier';

export const fetchSuppliers = async (): Promise<Supplier[]> => {
  const response = await api.get<Supplier[]>('/suppliers');
  return response.data;
};

export const addSupplier = async (data: Supplier): Promise<Supplier> => {
  const response = await api.post<Supplier>('/suppliers', data);
  return response.data;
};

export const fetchSupplierById = async (id: string): Promise<Supplier> => {
  const response = await api.get<Supplier>(`/suppliers/${id}`);
  return response.data;
};

export const updateSupplier = async (id: string, data: Supplier): Promise<Supplier> => {
  const response = await api.put<Supplier>(`/suppliers/${id}`, data);
  return response.data;
};

export const deleteSupplier = async (id: string): Promise<void> => {
  await api.delete(`/suppliers/${id}`);
};
