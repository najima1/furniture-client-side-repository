import React from "react";
import { Link } from "react-router-dom";

const Single_product = ({ item }) => {
  const { image, name, prev_price, curr_price, _id } = item;

  return (
    <div className="shadow-lg py-3">
      <div className="">
        <img src={image} alt="" />
        <div className="px-5">
          <h1 className="block py-2">{name}</h1>
          <div className="flex items-center gap-x-3">
            <strong className="text-2xl line-through text-[#a4b0be]">
              ${prev_price}
            </strong>
            <strong className="text-2xl">${curr_price}</strong>
          </div>
          <Link
            to={`/single_product/${_id}`}
            className="bg-[#273c75] text-center block min-w-[50%] mx-auto uppercase rounded-sm text-white hover:bg-[#487eb0] transition-all py-1 mt-4"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Single_product;
