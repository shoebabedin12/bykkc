import React, { useState } from "react";
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

const TotalStudent = () => {
  const [isEditing, setIsEditing] = useState(false);

  const totalStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      gender: "female",
      profileImage: "https://example.com/student1.jpg",
      email: "alice@example.com",
      belt: 10,
      admissionDate: "2023-01-01",
      paymentID: "ALG1E9GL",
      dob: "2000-01-15"
    },
    {
      id: 2,
      name: "Bob Smith",
      gender: "male",
      profileImage: "https://example.com/student2.jpg",
      email: "bob@example.com",
      belt: 9,
      admissionDate: "2023-02-01",
      paymentID: "ALG1E9GL",
      dob: "1999-05-20"
    }
  ];

  const [editingId, setEditingId] = useState(null);

  const handleEditToggle = (id) => {
    setEditingId(id === editingId ? null : id);
  };

  const handleSave = () => {
    // Implement the logic to save the edited data
    setEditingId(null);
  };

  const handleDelete = (id) => {
    // Implement the logic to delete the row with the given id
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Total Students</h2>
            <button className="text-xl font-normal text-gray-800 border py-3 px-2 rounded-md bg-white hover:shadow-md">
              Add Student
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <table className="relative w-full border">
              <thead className="capitalize">
                <tr>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">ID</th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    Name
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    gender
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    Profile Image
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    belt
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    email
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    admission date
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    DOB
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    Bkash Payment ID
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-white bg-black">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {totalStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="odd:bg-white even:bg-slate-50 text-center"
                  >
                    <td>{student.id}</td>
                    <td contentEditable={editingId === student.id}>
                      {student.name}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.gender}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.gender === "male" ? (
                        student.imageUrl ? (
                          <img
                            className="h-10 w-10 rounded-full mx-auto"
                            src={student.imageUrl}
                            alt=""
                          />
                        ) : (
                          <img
                            className="h-10 w-10 rounded-full mx-auto"
                            src={require("./../assets/images/male.png")}
                            alt=""
                          />
                        )
                      ) : student.imageUrl ? (
                        <img
                          className="h-10 w-10 rounded-full mx-auto"
                          src={student.imageUrl}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-10 w-10 rounded-full mx-auto"
                          src={require("./../assets/images/female.png")}
                          alt=""
                        />
                      )}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.belt}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.email}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.admissionDate}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.dob}
                    </td>
                    <td contentEditable={editingId === student.id}>
                      {student.paymentID}
                    </td>
                    <td className="flex items-center justify-center">
                      {editingId === student.id ? (
                        <button
                          className="border flex-1 py-3 bg-black text-white"
                          onClick={handleSave}
                        >
                          <IoIosSave className="text-center mx-auto" />
                        </button>
                      ) : (
                        <button
                          className="border flex-1 py-3 bg-black text-white"
                          onClick={() => handleEditToggle(student.id)}
                        >
                          <FaUserEdit className="text-center mx-auto" />
                        </button>
                      )}
                      <button
                        className="border flex-1 p-3 bg-black text-white"
                        onClick={() => handleDelete(student.id)}
                      >
                        <AiOutlineUserDelete className="text-center mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default TotalStudent;
