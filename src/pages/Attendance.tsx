import React, { useEffect, useState } from 'react';
import { fetchAttendanceRecords } from '../services/attendanceService';

const Attendance: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<any[]>([]);

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
