import api from './api';
import { Payroll } from '../types/Payroll';

export const fetchPayrolls = async (): Promise<Payroll[]> => {
  const response = await api.get<Payroll[]>('/payroll');
  return response.data;
};

export const calculatePayroll = async (data: Payroll): Promise<Payroll> => {
  const response = await api.post<Payroll>('/payroll/calculate', data);
  return response.data;
};

export const fetchPayrollById = async (id: string): Promise<Payroll> => {
  const response = await api.get<Payroll>(`/payroll/${id}`);
  return response.data;
};
