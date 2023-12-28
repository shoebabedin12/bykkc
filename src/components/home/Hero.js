import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const users = useSelector((state) => state.login.userLogin);
  return (
    <>
      <section
        id="hero"
        className="hero-section text-center col-span-12 relative min-h-[200px]"
      >
        <img
          className="w-full h-full"
          src={require("./../../assets/images/karate_banner.png")}
          alt=""
        />
        <div className="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <h1 className="lg:text-2xl md:text-lg font-bold text-white px-10">
            Welcome to Bangladesh Young King Karate Center
          </h1>
          <p className="mt-4 lg:text-lg md:text-base font-normal text-white px-10 hidden md:block">
            Learn discipline, self-defense, and achieve physical fitness.
          </p>
          {users === null && (
            <Link
              to={"/signup"}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded inline-block"
            >
              Join Now
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
