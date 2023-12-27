import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="contact-section pb-16 md:py-16 text-center col-span-12"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6">
              <img src={require("./../../assets/images/contact.png")} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-4">
                If you have any questions or would like to inquire about our
                classes, feel free to contact us using the information below.
              </p>
              <p className="mt-4">Phone: (123) 456-7890</p>
              <p>Email: info@karateschool.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
