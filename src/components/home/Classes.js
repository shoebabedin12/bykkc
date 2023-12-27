import React from "react";

const Classes = () => {
  return (
    <>
      <section
        id="classes"
        className="classes-section text-center col-span-12 pb-16"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6">
              <img src={require("./../../assets/images/classes.jpg")} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">Classes</h2>
              <p className="mt-4">
                We offer a variety of karate classes for different age groups
                and skill levels. Whether you are a beginner or an advanced
                practitioner, our experienced instructors will guide you on your
                martial arts journey.
              </p>
              <ul className="mt-6 flex items-center justify-center flex-wrap font-bold gap-4">
                <li className="border flex-[1_1_40%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  Kids Karate
                </li>
                <li className="border flex-[1_1_40%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  Teen Karate
                </li>
                <li className="border flex-[1_1_40%] py-3 shadow-[5px_5px_2px_rgba(0,0,0,.1)]">
                  Adult Karate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
