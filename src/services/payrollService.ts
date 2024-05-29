import api from './api';
import { PayrollRecord } from '../types/PayrollRecord';


export const fetchPayrolls = async (): Promise<PayrollRecord[]> => {
  const response = await api.get<PayrollRecord[]>('/payroll');
  return response.data;
};

export const calculatePayroll = async (data: PayrollRecord): Promise<PayrollRecord> => {
  const response = await api.post<PayrollRecord>('/payroll/calculate', data);
  return response.data;
};

export const fetchPayrollById = async (id: string): Promise<PayrollRecord> => {
  const response = await api.get<PayrollRecord>(`/payroll/${id}`);
  return response.data;
};

