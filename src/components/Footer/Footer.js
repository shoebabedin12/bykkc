import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="shadow-[0px_2px_22px_-10px_#000] w-full bg-white">
        <div className="container">
          <div className="flex items-center justify-center py-3">
            <p className="text-black text-base text-center">
              Website Developed by{" "}
              <Link
                target="_blank"
                className="font-medium text-sky-800"
                to={"https://shoebabedin-web-developer.vercel.app/"}
              >
                MD. Shoeb Abedin
              </Link>{" "}
              <span className="">
                Bangladesh Young King Karate Center. All rights reserved.
              </span>
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
