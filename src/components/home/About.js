import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about-section bg-white text-center col-span-12 mb-10 md:mb-0"
      >
        <div className="container">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-6 text-center md:text-left order-2 md:order-1">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-4 text-lg font-normal">
                Bangladesh Young King Karate Center is dedicated to providing
                high-quality martial arts training for students of all ages. We
                offer a supportive and disciplined environment where individuals
                can learn and grow both physically and mentally.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <div
                style={{
                  width: "100%",
                  height: 0,
                  paddingBottom: "100%",
                  position: "relative",
                  pointerEvents: 'none',
                }}
              >
                <iframe
                  src="https://giphy.com/embed/1SItN4ot1gwMoa4D8L"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                  title="Giphy Embed"
                ></iframe>
              </div>
              {/* <img src={require("./../../assets/images/about.jpg")} alt=""  className="w-full object-cover"/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
