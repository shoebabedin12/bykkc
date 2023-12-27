import React from 'react';



    const classes = [
      {
        title: "Beginner's Class",
        schedule: "Every Monday and Wednesday, 6:00 PM - 7:00 PM",
        description: "Suitable for beginners with no prior experience. Learn the basics of karate and foundational techniques.",
      },
      {
        title: "Intermediate Class",
        schedule: "Every Tuesday and Thursday, 7:00 PM - 8:00 PM",
        description: "For students who have completed the beginner's class or have previous karate experience. Build upon your skills and learn more advanced techniques.",
      },
      {
        title: "Advanced Class",
        schedule: "Every Saturday, 10:00 AM - 12:00 PM",
        description: "An intensive class for experienced karate practitioners. Focus on refining techniques, sparring, and advanced kata.",
      },
    ];


const Class = () => {
    return (
        <>
           <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Karate School</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Karate Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cls.title}</h3>
              <p className="text-gray-600">{cls.schedule}</p>
              <p className="mt-4 text-gray-700">{cls.description}</p>
            </div>
          ))}
        </div>
      </main>

    </div>
        </>
    );
};

export default Class;