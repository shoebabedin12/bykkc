import React from "react";

const TotalTeacher = () => {
  const totalTeacher = [
    {
      id: 1,
      name: "John Doe",
      gender: "male",
      profileImage: "https://example.com/teacher1.jpg",
      email: "john@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "female",
      profileImage: "https://example.com/teacher2.jpg",
      email: "jane@example.com"
    },
    {
      id: 3,
      name: "Alex Johnson",
      gender: "male",
      profileImage: "https://example.com/teacher3.jpg",
      email: "alex@example.com"
    },
    {
      id: 4,
      name: "Emily White",
      gender: "female",
      profileImage: "https://example.com/teacher4.jpg",
      email: "emily@example.com"
    },
    {
      id: 5,
      name: "Michaela Brown",
      gender: "female",
      profileImage: "https://example.com/teacher5.jpg",
      email: "michaela@example.com"
    }
  ];

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Total Teacher</h2>
            <button className="text-xl font-normal text-gray-800 border py-3 px-2 rounded-md bg-white hover:shadow-md">
              Add Teacher
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <ul role="list" class="p-6 divide-y divide-slate-200">
              {totalTeacher.map((teacher) => (
                <li class="flex py-4 first:pt-0 last:pb-0">
                  {teacher.gender === "male" ? (
                    teacher.imageUrl ? (
                      <img
                        class="h-10 w-10 rounded-full"
                        src="{person.imageUrl}"
                        alt=""
                      />
                    ) : (
                      <img
                        class="h-10 w-10 rounded-full"
                        src={require('./../assets/images/male.png')}
                        alt=""
                      />
                    )
                  ) : (
                    teacher.imageUrl ? (
                      <img
                        class="h-10 w-10 rounded-full"
                        src="{person.imageUrl}"
                        alt=""
                      />
                    ) : (
                      <img
                        class="h-10 w-10 rounded-full"
                        src={require('./../assets/images/female.png')}
                        alt=""
                      />
                    )
                  )}
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">
                      {teacher.name}
                    </p>
                    <p class="text-sm text-slate-500 truncate">
                      {teacher.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default TotalTeacher;
