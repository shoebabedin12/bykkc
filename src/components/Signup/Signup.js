import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../../validation";

const Signup = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    image: "",
    paymentID: ""
  };
  const registration = async () => {
    try {
      let { data } = await axios.post(`${apiKey}/auth/registration`, {
        fullName: formik.values.fullName,
        email: formik.values.email,
        password: formik.values.password,
        image: formik.values.image,
        paymentID: formik.values.paymentID
      });
      console.log(data);
      toast(data.error);
      if (data.success) {
        toast(data.message);
        navigate("/verify");
        localStorage.setItem("User Email", JSON.stringify(data.email));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signup,
    onSubmit: async () => {
      await registration();
    }
  });
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Bangladesh Young King Karate Center(BYKKC)
            </h1>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form
            className="bg-white"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                placeholder="Full name"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.fullName}
              </p>
            ) : null}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.email}
              </p>
            ) : null}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.password}
              </p>
            ) : null}
            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <FaUserCheck  className="h-5 w-5 text-gray-400" />
              <select
                className="pl-2 outline-none border-none w-full"
                name="role"
                defaultValue={"teacher"} // Set the initial selected option
                onChange={formik.handleChange}
              >
                <option className="text-black" value="">
                  Select your role
                </option>
                <option className="text-black" value="teacher">
                  Teacher
                </option>
                <option className="text-black" value="student" >
                  Student
                </option>
              </select>
            </div>
            {formik.touched.role && formik.errors.role ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.role}
              </p>
            ) : null} */}
            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <RiUploadCloud2Fill className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 outline-none border-none "
                type="file"
                placeholder="User"
                name="image"
                accept="image/*"
                // value={formik.values.image}
                // onChange={formik.handleChange}
                onChange={(e) => {
                  let file = e.target.files[0];
                  let reader = new FileReader();
                  reader.onloadend = () => {
                    if (reader.readyState === 2) {
                      formik.setFieldValue("image", reader.result);
                      setPreview(reader.result);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
            {preview && (
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
                <img
                  src={preview}
                  alt=""
                  className="max-w-[150px] object-cover"
                />
              </div>
            )} */}

            <div className="flex items-center space-x-6 border-2 py-2 px-3 rounded-2xl mt-4">
              <div className="shrink-0">
                {preview ? (
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={preview}
                    alt="Current profile photo"
                  />
                ) : (
                  <img
                    className="h-16 w-16 object-cover rounded-full bg-white"
                    src={require("./../../assets/images/file-upload-image.jpg")}
                    alt="Current profile photo"
                  />
                )}
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  placeholder="User"
                  name="image"
                  accept="image/*"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                  onChange={(e) => {
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.onloadend = () => {
                      if (reader.readyState === 2) {
                        formik.setFieldValue("image", reader.result);
                        setPreview(reader.result);
                      }
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </label>
            </div>
            {formik.touched.image && formik.errors.image ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.image}
              </p>
            ) : null}

            <div className="flex items-center  flex-col border-2 py-2 px-3 rounded-2xl mt-4">
              <div className="flex items-center w-full">
                <MdOutlinePayment />
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="text"
                  placeholder="Bkash Payment ID"
                  name="paymentID"
                  value={formik.values.paymentID}
                  onChange={formik.handleChange}
                />
              </div>
              <p>Note: Bkash Payment Number is 01686586914</p>
            </div>
            {formik.touched.paymentID && formik.errors.paymentID ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.paymentID}
              </p>
            ) : null}

            {loading ? (
              <button type="button" className="flex items-center justify-center w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mt-2" disabled>
                <svg
                  className="motion-reduce:hidden animate-spin ..."
                  viewBox="0 0 24 24"
                ></svg>
                Processing...
              </button>
            ) : (
              <button
                type="submit"
                className="block w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mt-2"
                onClick={() => setLoading(true)}
              >
                Signup
              </button>
            )}
            {/* <Link
              to={"/"}
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            >
              Forgot Password ?
            </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
