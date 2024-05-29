import api from './api';
import { Employee } from '../types/Employee';

export const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>('/employee');
  return response.data;
};

export const addEmployee = async (data: Employee): Promise<Employee> => {
  const response = await api.post<Employee>('/employee', data);
  return response.data;
};

export const fetchEmployeeById = async (id: string): Promise<Employee> => {
  const response = await api.get<Employee>(`/employee/${id}`);
  return response.data;
};

export const updateEmployee = async (id: string, data: Employee): Promise<Employee> => {
  const response = await api.put<Employee>(`/employee/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await api.delete(`/employee/${id}`);
};
