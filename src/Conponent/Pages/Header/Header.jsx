import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authcontext/ContextProvider";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, signOutUser } = useContext(AuthContext);

  const logoutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successfull");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div>
      <nav className="relative  bg-[#FDA7DF] shadow ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/home"
                className="text-2xl font-bold  transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              >
                Furniv
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setShowNav(!showNav)}
                type="button"
                className="  focus:outline-none"
                aria-label="toggle menu"
              >
                {showNav ? (
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" -->x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" 1..opacity-0 -translate-x-full block .2.. translate-x-0 transition-all hidden*/}
          <div
            className={
              showNav
                ? "hidden md:block"
                : "" +
                  "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#FDA7DF] block md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
            }
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/home"
                className="my-2 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </Link>

              <Link
                to="/question"
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Blog
              </Link>

              <Link
                to="/deshboard"
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Deshboard
              </Link>

              {user?.uid ? (
                <button
                  onClick={() => logoutUser()}
                  type="button"
                  className="my-2 py-1 px-5 transition-colors duration-300 transform hover:text-white  md:mx-4 bg-[#D980FA] text-white md:my-0"
                >
                  Sign out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="my-2 py-1 px-5 transition-colors duration-300 transform hover:text-white  md:mx-4 bg-[#D6A2E8]  md:my-0"
                >
                  Login
                </Link>
              )}

              <Link
                to=""
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
