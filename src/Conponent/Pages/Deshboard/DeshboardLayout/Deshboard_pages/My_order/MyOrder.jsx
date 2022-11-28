import { useQuery } from "@tanstack/react-query";
import "./order.css";

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../../Authcontext/ContextProvider";
import UseUserRole from "../../../../../Auth/UseUserRole";
import Spinner from "../../../../Spinner/Spinner";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [role] = UseUserRole(user?.email);

  const url = `${process.env.REACT_APP_URL}/orderProduct?email=${user?.email}`;

  const {
    data: orderProduct = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderProduct"],
    queryFn: () => fetch(url).then((e) => e.json()),
  });

  const deleteOrder = (id) => {
    const url = `${process.env.REACT_APP_URL}/orderProduct/${id}`;
    fetch(url, { method: "DELETE" })
      .then((e) => e.json())
      .then((data) => {
        refetch();
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {role === "user" && (
            <div>
              {orderProduct.length <= 0 ? (
                <h1 className="text-4xl p-4">There is no product</h1>
              ) : (
                <div className="customCss">
                  <strong className="text-2xl ">Order List</strong>

                  <div className="customCss">
                    <div className="overflow-x-auto w-full">
                      <table className="table">
                        {/* <!-- head --> */}
                        <thead>
                          <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {/* <!-- row 1 --> */}
                          {orderProduct.length &&
                            orderProduct.map((data) => (
                              <tr key={data._id}>
                                <td>
                                  <div className="flex items-center space-x-10">
                                    <div className="avatar">
                                      <div className="mask mask-squircle w-12 h-12">
                                        <img src={data.image} />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold">
                                        {data.product_name}
                                      </div>
                                      <div className="text-sm opacity-50">
                                        {data.location}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  {data.name}
                                  <br />
                                </td>

                                <th>
                                  <button
                                    onClick={() => deleteOrder(data._id)}
                                    className="btn-sm bg-orange-500 text-white"
                                  >
                                    delete
                                  </button>
                                </th>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
