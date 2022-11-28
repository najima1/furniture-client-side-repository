import { format } from "date-fns";
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../Authcontext/ContextProvider";

const Add_product = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const selectItem = useRef();

  //signup handler
  //Handler product
  const addProductHandler = (data) => {
    const imgFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imgFile);

    //image BB url
    const imageUrl = `https://api.imgbb.com/1/upload?&key=a532c13ef4dc6a31e5a16ac00f1d869f`;

    try {
      fetch(imageUrl, {
        method: "POST",
        body: formData,
      })
        .then((e) => e.json())
        .then((img) => {
          const displayUrl = img.data.url;
          const obj = createData(user, data, displayUrl);
          createProduct(obj);
          addProductBySeller(obj);

          navigate("/deshboard/sellerProduct");
          toast.success("Product added successfully");
          reset();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const createData = (user, data, displayUrl) => {
    const date = new Date();
    const timeFormat = format(date, "PP");

    const productInfo = {
      name: data.name,
      category: selectItem.current.value,
      email: user.email,
      prev_price: data.prev_price,
      curr_price: data.curr_price,
      desc: data.desc,
      product_id: data.product_id,
      message: data.message,
      image: displayUrl,
      date: timeFormat,
    };

    return productInfo;
  };

  //seller product add in different collection
  const addProductBySeller = (productObj) => {
    fetch(`${process.env.REACT_APP_URL}/addProductBy/seller`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    })
      .then((e) => e.json())
      .then((pro) => {
        console.log(pro);
      })
      .catch((e) => toast.error(e.message));
  };

  //create product by seller with database
  const createProduct = (productObj) => {
    fetch(`${process.env.REACT_APP_URL}/addproduct/seller`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      //check
      body: JSON.stringify(productObj),
    })
      .then((e) => e.json())
      .then((pro) => {})
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="h-screen">
      <div className="container py-3">
        <section className="flex items-center justify-center my-9">
          <form
            onSubmit={handleSubmit(addProductHandler)}
            className="w-full max-w-xl space-y-2 md:px-16 md:shadow-2xl p-2 "
          >
            {/* category name */}
            <div className="relative ">
              <span className="absolute top-[40px]">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              {/* checkbox */}
              <div className="">
                <label htmlFor="" className="pb-2 block">
                  Select category :
                </label>

                <select ref={selectItem} name="" className="w-full p-2 pl-10">
                  <option>furniture</option>
                  <option>lighting</option>
                  <option>home_décor</option>
                </select>
              </div>
            </div>
            {/* product name */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                aria-invalid={errors.name ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="product_name"
              />
              {errors.name?.type === "required" && (
                <small className="block text-red-400" role="alert">
                  Product name is required
                </small>
              )}
            </div>
            {/* profile image */}
            <div className="relative ">
              <span className="absolute top-[8px] pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </span>

              <input
                type="file"
                accept="image/*"
                {...register("image", {
                  required: "image is required",
                })}
                aria-invalid={errors.image ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
              />
              {errors.image && (
                <small className="text-red-400" role="alert">
                  {errors.image.message}
                </small>
              )}
            </div>
            {/* product price */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <input
                type="number"
                {...register("prev_price", {
                  required: "Price is required",
                })}
                aria-invalid={errors.prev_price ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="Previous price"
              />
              {errors.prev_price && (
                <small className="text-red-400" role="alert">
                  {errors.prev_price.message}
                </small>
              )}
            </div>
            {/* product current price */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <input
                type="number"
                {...register("curr_price", {
                  required: "Price is required",
                })}
                aria-invalid={errors.curr_price ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="Current price"
              />
              {errors.curr_price && (
                <small className="text-red-400" role="alert">
                  {errors.curr_price.message}
                </small>
              )}
            </div>
            {/* description */}{" "}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("desc", {
                  required: "Desc is required",
                })}
                aria-invalid={errors.desc ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="Description"
              />

              {errors.desc && (
                <small className="text-red-400" role="alert">
                  {errors.desc.message}
                </small>
              )}
            </div>
            {/* product id */}{" "}
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
                {...register("product_id", {
                  required: "Product id is required",
                })}
                aria-invalid={errors.product_id ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="Product id"
              />

              {errors.product_id && (
                <small className="text-red-400" role="alert">
                  {errors.product_id.message}
                </small>
              )}
            </div>
            {/* message */}{" "}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </span>

              <textarea
                type="text"
                {...register("message", {
                  required: "message is required",
                })}
                aria-invalid={errors.message ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="message"
              />

              {errors.message && (
                <small className="text-red-400" role="alert">
                  {errors.message.message}
                </small>
              )}
            </div>
            {/* submit button */}
            <div className="mt-6 mx-auto">
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-teal-400  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Add_product;
