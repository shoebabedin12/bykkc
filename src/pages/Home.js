import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import About from "../components/home/About";
import Branches from "../components/home/Branches";
import Classes from "../components/home/Classes";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Instructor from "../components/home/Instructor";

const Home = () => {
  const users = useSelector((state) => state.login.userLogin);

  return (
    <>
      <Helmet>
        <title>BYKKC</title>
      </Helmet>

      <div className="grid grid-cols-12">
        <Hero />
        <About />
        <Classes />
        <Branches />
        <Instructor />
        <Contact />
      </div>
    </>
  );
};

export default Home;
