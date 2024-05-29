import React, { useEffect, useState } from 'react';
import { fetchAttendanceRecords } from '../services/attendanceService';
import { AttendanceRecord } from '../types/AttendanceRecord';

const Attendance: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    const getAttendanceRecords = async () => {
      const data = await fetchAttendanceRecords();
      setAttendanceRecords(data);
    };

    getAttendanceRecords();
  }, []);

  return (
    <div>
      <h1>Attendance Page</h1>
      <ul>
        {attendanceRecords.map(record => (
          <li key={record.id}>{record.date}: {record.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
