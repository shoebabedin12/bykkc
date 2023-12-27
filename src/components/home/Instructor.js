import React from "react";

const Instructor = () => {
  return (
    <>
      <section
        id="instructors"
        className="instructors-section bg-white py-16 text-center col-span-12"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <h2 className="text-2xl font-bold">Instructors</h2>
              <p className="mt-4">
                Our instructors are highly trained and dedicated to helping
                students reach their full potential. They have years of
                experience and are passionate about teaching martial arts.
              </p>
              <ul className="mt-6 flex items-center flex-wrap font-bold gap-4">
                <li className="border md:flex-[1_1_40%] flex-[1_1_100%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  John Smith - 5th Dan Black Belt
                </li>
                <li className="border md:flex-[1_1_40%] flex-[1_1_100%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  Jane Doe - 4th Dan Black Belt
                </li>
                <li className="border md:flex-[1_1_40%] flex-[1_1_100%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  Mike Johnson - 3rd Dan Black Belt
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <img
                className="mx-auto"
                src={require("./../../assets/images/instructors.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
