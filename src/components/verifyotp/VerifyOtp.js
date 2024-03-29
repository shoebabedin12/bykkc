import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_KEY;
  const user = localStorage.getItem("User Email");
  const newUSer = JSON.parse(user);
  console.log(newUSer);
  const initialValues = {
    email: newUSer,
    randomOtp: ""
  };

  const verify = async () => {
    try {
      let { data } = await axios.post(`${apiKey}/auth/email-verification`, {
        email: formik.values.email,
        randomOtp: formik.values.randomOtp
      });
      console.log(data);
      toast(data.error);
      if (data.success) {
        toast(data.message);
        navigate("/login");
        localStorage.removeItem("User Email");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      verify();
    }
  });

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>
                  We have sent a code to your email <br />{" "}
                  {newUSer.length > 0 && newUSer}
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-col items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-16 hidden">
                      <input
                        className=" w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 code-input"
                        type="text"
                        name="email"
                        value={newUSer}
                        readOnly
                      />
                    </div>
                    <div className="w-full h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 code-input"
                        type="text"
                        name="randomOtp"
                        value={formik.values.randomOtp}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
