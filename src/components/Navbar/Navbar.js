import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgUser } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  const [menu, setMenu] = useState(false);
  // const user = localStorage.getItem("loggedUser")
  // const newUSer = JSON.parse(user)
  const users = useSelector((state) => state.login.userLogin);
  // const [auth, setAuth] = useState(users);
  const dispatch = useDispatch();
  // console.log(users.user);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("User");
      window.location.reload(router("/login"));
      // router("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const hendleMenu = () => {
    setMenu(!menu);
    console.log("click");
  };
  return (
    <>
      <div className="navbar shadow-md sticky top-0 bg-white w-full z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="logo">
              <Link to={"/"} className="font-bold text-xl text-black">
                BYKKC
              </Link>
            </div>

            {users !== null ? (
              <>
                <div className="items-center gap-x-3 hidden lg:flex">
                  <ul className="flex items-center justify-start lg:gap-4">
                    <li>
                      <NavLink
                        to="/"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/class"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Classes
                      </NavLink>
                    </li>
                    {users.user.role === "admin" && (
                      <>
                        <li>
                          <NavLink
                            to="/total-students"
                            className="text-black font-medium text-base hover:text-gray-500"
                          >
                            Total Student
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/total-teachers"
                            className="text-black font-medium text-base hover:text-gray-500"
                          >
                            Total Teacher
                          </NavLink>
                        </li>
                      </>
                    )}
                    {users.user.role === "teacher" && (
                      <li>
                        <NavLink
                          to="/total-students"
                          className="text-black font-medium text-base hover:text-gray-500"
                        >
                          Total Student
                        </NavLink>
                      </li>
                    )}
                    <li>
                      <NavLink
                        to="/attendance"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Attendance
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-x-3">
                  <NavLink
                    to="/profile"
                    className="border py-1 px-2 rounded-md shadow-md flex items-center text-black hover:bg-gray-200"
                  >
                    {users.user.image ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover mr-2"
                        src={users.user.image}
                        alt=""
                      />
                    ) : (
                      <CgUser />
                    )}
                    <span>{users.user.fullName}</span>
                  </NavLink>
                  <button
                    className="border py-2 px-2 rounded-md shadow-md text-black hidden lg:block hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    <AiOutlineLogout className="w-5 h-full py-1.5" />
                  </button>
                  <div className="mob-menu">
                    <button
                      className="border py-2 px-2 rounded-md shadow-md text-black block lg:hidden hover:bg-gray-200"
                      onClick={hendleMenu}
                    >
                      <HiOutlineMenuAlt3 className="w-5 h-full py-1.5"/>
                    </button>
                    {menu && (
                      <div
                        className={`absolute left-0 top-0 w-full h-screen bg-black z-10 ease-linear pt-5 delay-500 ${
                          menu ? "top-0 " : "-top-full"
                        }`}
                      >
                        <div className="container">
                          <div className="flex items-center justify-between">
                            <div className="logo">
                              <Link
                                to={"/"}
                                className="font-bold text-xl text-white"
                              >
                                BYKKC
                              </Link>
                            </div>
                            <button
                              className="border py-2 px-2 rounded-md shadow-md text-white block lg:hidden"
                              onClick={hendleMenu}
                            >
                              <HiOutlineMenuAlt3 />
                            </button>
                          </div>
                          <ul
                            className={`flex items-center flex-col justify-center gap-4 h-screen`}
                          >
                            <li>
                              <NavLink
                                to="/"
                                className="text-white font-medium text-base hover:text-gray-300"
                                onClick={() => setMenu(false)}
                              >
                                Home
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/class"
                                className="text-white font-medium text-base hover:text-gray-500"
                                onClick={() => setMenu(false)}
                              >
                                Classes
                              </NavLink>
                            </li>
                            {users.user.role === "admin" && (
                              <>
                                <li>
                                  <NavLink
                                    to="/total-students"
                                    className="text-white font-medium text-base hover:text-gray-500"
                                    onClick={() => setMenu(false)}
                                  >
                                    Total Student
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/total-teachers"
                                    className="text-white font-medium text-base hover:text-gray-500"
                                    onClick={() => setMenu(false)}
                                  >
                                    Total Teacher
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/attendance"
                                    className="text-white font-medium text-base hover:text-gray-300"
                                    onClick={() => setMenu(false)}
                                  >
                                    Attendance
                                  </NavLink>
                                </li>
                              </>
                            )}
                            {users.user.role === "teacher" && (
                              <>
                                <li>
                                  <NavLink
                                    to="/total-students"
                                    className="text-white font-medium text-base hover:text-gray-500"
                                    onClick={() => setMenu(false)}
                                  >
                                    Total Student
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/attendance"
                                    className="text-white font-medium text-base hover:text-gray-300"
                                    onClick={() => setMenu(false)}
                                  >
                                    Attendance
                                  </NavLink>
                                </li>
                              </>
                            )}
                            <li>
                              <button
                                className="text-white hover:text-gray-300"
                                onClick={handleLogout}
                              >
                                LogOut
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-x-3">
                  <Link
                    to={"login"}
                    className="font-medium text-lg text-black hover:text-gray-500"
                  >
                    Login
                  </Link>
                  <Link
                    to={"signup"}
                    className="font-medium text-lg text-black hover:text-gray-500"
                  >
                    Signup
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
