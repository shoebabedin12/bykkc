import React from "react";
import HoverEffectItem from "../common/HoverEffectItem";

const Branches = () => {
  const locations = [
    "Narayanganj - Head Office",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Cox's Bazar",
    "Jessore",
    "Comilla",
    "Gazipur",
    "Bogra",
    "Tangail"
  ];

  return (
    <>
      <section
        id="branches"
        className="branches-section text-center col-span-12 py-10 text-white"
        
      >
        {/* <img src={require("./../../assets/images/branches.jpg")} className="w-full h-auto absolute top-0 left-0 -z-[1]" alt="" /> */}
        <div className="container">
          <div className="w-full  flex items-center justify-center flex-col border-red-900">
            <h2 className="text-2xl font-bold">Branches</h2>
            <p className="mt-4">
              Our instructors are highly trained and dedicated to helping students
              reach their full potential. They have years of experience and are
              passionate about teaching martial arts.
            </p>
            <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
              {locations.map((location, index) => (
                  <HoverEffectItem key={index} className="md:flex-[1_1_30%] flex-[1_1_100%]">{location}</HoverEffectItem>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;
