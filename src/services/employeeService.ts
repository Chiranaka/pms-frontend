import api from './api';
import { Employee } from '../types/Employee';

export const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>('/employees');
  return response.data;
};

export const addEmployee = async (data: Employee): Promise<Employee> => {
  const response = await api.post<Employee>('/employees', data);
  return response.data;
};

export const fetchEmployeeById = async (id: string): Promise<Employee> => {
  const response = await api.get<Employee>(`/employees/${id}`);
  return response.data;
};

export const updateEmployee = async (id: string, data: Employee): Promise<Employee> => {
  const response = await api.put<Employee>(`/employees/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await api.delete(`/employees/${id}`);
};

