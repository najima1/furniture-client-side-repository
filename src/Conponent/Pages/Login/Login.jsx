import React, { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authcontext/ContextProvider";
import ButtonSpinner from "../Deshboard/DeshboardLayout/Deshboard_pages/ButtonSpinner/ButtonSpinner";

const Login = () => {
  const [showModal, setModal] = useState(null);
  const { loginWithGoogle, loginUserEmailPassword, user, loadin, setLoading } =
    useContext(AuthContext);
  const selectItem = useRef();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //navigate user
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // handler for login user
  //====================================
  const LoginHandler = (data) => {
    loginUserEmailPassword(data.email, data.password)
      .then((res) => {
        const result = res.user;

        toast.success("Login successfull");
        navigate("/home");
      })
      .catch((e) => {
        toast.error(e.message);
        setLoading(false);
      });
  };

  //signInWithGoogle
  const signInWithGoogle = () => {
    loginWithGoogle()
      .then((urs) => {
        const user = urs.user;

        fetch(`${process.env.REACT_APP_URL}/user/${user?.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...user }),
        })
          .then((e) => e.json())
          .then((data) => {
            toast.success("User login successfull");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="container py-3 md:py-24">
      <section className="flex items-center justify-center my-9">
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className="w-full max-w-xl space-y-6 md:px-16 md:shadow-2xl p-4 py-16"
        >
          {/* email */}
          <div className="relative ">
            <span className="absolute top-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
              placeholder="email"
            />
            {errors.email && (
              <small className="text-red-400" role="alert">
                {errors.email.message}
              </small>
            )}
          </div>
          {/* password */}{" "}
          <div className="relative ">
            <span className="absolute top-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "minmun length is 6 character",
                },
                maxLength: {
                  value: 10,
                  message: "maximum length is 10 character",
                },
                pattern: {
                  value: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/,
                  message:
                    "Your password must contain at least one special character.",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
              className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
              placeholder="password"
            />
            {errors.password && (
              <small className="text-red-400" role="alert">
                {errors.password.message}
              </small>
            )}
            <label
              htmlFor="my-modal-3"
              className="block text-right text-orange-300"
            >
              <small>forget password</small>
            </label>
          </div>
          {/* submit button */}
          <div className="mt-6">
            {loadin ? (
              <ButtonSpinner />
            ) : (
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Login
              </button>
            )}

            {/* login with google */}
            <div>
              <button
                onClick={() => signInWithGoogle()}
                type="button"
                className="w-full px-6 mt-3 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-orange-400 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Signin with Google
              </button>
            </div>
            <div className="mt-6 text-center ">
              <span>Create an account?</span>
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400 ml-2"
              >
                signup
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
