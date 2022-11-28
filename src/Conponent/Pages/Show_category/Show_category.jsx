import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Single_product from "./Single_product";
import "./signle_cart.css";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authcontext/ContextProvider";
import { Spinner } from "flowbite-react";

const Show_category = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    let func = async () => {
      const url = `${process.env.REACT_APP_URL}/product/${category}`;
      const res = await axios.get(url);
      const data = await res.data;
      setProduct(data);
    };

    func();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="single_box container py-11">
          {product.length &&
            product?.map((item) => (
              <Single_product item={item} key={item._id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Show_category;
