import React, { useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", attendanceStatus: null },
    { id: 2, name: "Jane Smith", attendanceStatus: null },
    { id: 3, name: "Michael Johnson", attendanceStatus: null }
  ]);

  const [totalStudent, setTotalStudent] = useState(students.length);
  const [totalPresent, setTotalPresent] = useState(0);
  const [totalAbsent, setTotalAbsent] = useState(0);

  const updateAttendance = (id, status) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, attendanceStatus: status } : student
    );

    setStudents(updatedStudents);

    // Update totals
    setTotalPresent(
      updatedStudents.filter(
        (student) => student.attendanceStatus === "present"
      ).length
    );
    setTotalAbsent(
      updatedStudents.filter((student) => student.attendanceStatus === "absent")
        .length
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Attendance
            </h2>
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-12">
            <table className="min-w-full bg-white border border-gray-300 text-center">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Student Name</th>
                  <th className="py-2 px-4 border-b">Attendance</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className={`px-4 py-1 rounded-full bg-green-500 text-white`}
                        onClick={() => updateAttendance(student.id, "present")}
                      >
                        Present
                      </button>
                      <button
                        className={`px-4 py-1 rounded-full bg-red-500 text-white ml-2`}
                        onClick={() => updateAttendance(student.id, "absent")}
                      >
                        Absent
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b ">
                      {student.attendanceStatus && (
                        <p
                          className={`px-4 py-1 rounded-full border-b w-min mx-auto ${
                            student.attendanceStatus === "present"
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {student.attendanceStatus}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-2 px-4 border-b">
                    Total Student: {totalStudent}
                  </td>
                  <td className="py-2 px-4 border-b">
                    Total Present: {totalPresent}
                  </td>
                  <td className="py-2 px-4 border-b">
                    Total Absent: {totalAbsent}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;
