import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Authcontext/ContextProvider";
import ShowModal from "../ShowModal/ShowModal";
import Spinner from "../Spinner/Spinner";

const Product_details = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(true);
  // const [singlePro, setsinglePro] = useState([]);
  const { user } = useContext(AuthContext);

  const { data: singlePro = [], isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const url = `${process.env.REACT_APP_URL}/allProducts/${id}?email=${user?.email}`;
      const res = await axios.get(url);
      const data = await res.data;
      return data;
    },
  });

  // useEffect(() => {
  //   const fun = async () => {
  //     const url = `${process.env.REACT_APP_URL}/product/${id}`;
  //     const res = await axios.get(url);
  //     const data = await res.data;
  //     setsinglePro(data);
  //   };
  //   fun();
  // }, []);

  // last file category
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="md:flex py-10 justify-evenly container gap-x-3">
          <div className="min-w-[50%]">
            <img className="shadow w-full" src={singlePro?.image} alt="" />
          </div>

          {/* product info */}
          <div className="mt-8 md:mt-20 p-7 ">
            <h1 className="block text-2xl font-semibold">{singlePro?.name}</h1>
            <h1 className="md:flex gap-x-6 text-xl py-3 space-x-6">
              <span className="inline-block text-4xl font-semibold line-through text-[#a4b0be]">
                ${singlePro?.prev_price}{" "}
              </span>
              <span className="inline-block text-4xl font-semibold">
                ${singlePro?.curr_price}
              </span>
            </h1>

            <hr className="border-[1px] border-teal-100" />
            <div className="py-4">
              <p className="py-1 font-semibold">{singlePro?.shiping}</p>
              <strong className="block py-1 text-2xl border-teal-300 border-b-[1px] mb-1">
                Description
              </strong>
              <p>{singlePro.desc}</p>
            </div>

            <strong className="block py-1 text-2xl border-teal-300 border-b-[1px] mb-1">
              Message
            </strong>
            <div className="py-5">{singlePro?.message}</div>

            <p className="block py-1 mb-6 border-gray-200 border-b-[1px]">
              Posted -{" "}
              <span className="text-orange-400">( {singlePro?.date} )</span>
            </p>

            {/* button add to card */}
            <div className=" md:flex items-center">
              {/* counter */}
              <div className="md:flex items-center gap-x-3">
                <strong
                  onClick={() => setCount((prev) => prev - 1)}
                  className="bg-orange-400 py-1 px-8 rounded-sm text-white text-xl"
                >
                  -
                </strong>
                <span className="inline-block text-2xl">{count}</span>
                <strong
                  onClick={() => setCount((prev) => prev + 1)}
                  className="bg-teal-500 px-8 py-1 rounded-sm text-white text-xl"
                >
                  +
                </strong>
              </div>
              {/* button */}
              <div>
                <div className="flex mt-3 md:mt-0">
                  <div>
                    <label
                      onClick={() => setModal(true)}
                      htmlFor="my-modal-3"
                      className="bg-[#273c75] text-white mx-2 hover:bg-teal-400 transition-all px-7 py-1 text-xl mt-[2px] rounded-sm block"
                    >
                      Book now
                    </label>
                  </div>
                  {/* wish list */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 ml-3 text-orange-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* modal */}
            {modal && (
              <ShowModal data={singlePro} moda={modal} setModal={setModal} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Product_details;
