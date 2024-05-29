import api from './api';
import { AttendanceRecord } from '../types/AttendanceRecord';
import { CheckInOutData } from '../types/CheckInOutData';


export const checkIn = async (data: CheckInOutData): Promise<AttendanceRecord> => {
  const response = await api.post<AttendanceRecord>('/attendance/check-in', data);
  return response.data;
};

export const checkOut = async (data: CheckInOutData): Promise<AttendanceRecord> => {
  const response = await api.post<AttendanceRecord>('/attendance/check-out', data);
  return response.data;
};

export const fetchAttendanceRecords = async (): Promise<AttendanceRecord[]> => {
  const response = await api.get<AttendanceRecord[]>('/attendance/records');
  return response.data;
};
