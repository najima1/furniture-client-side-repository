import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../Admin/seller.css";
import { useEffect } from "react";
import Spinner from "../../../../Spinner/Spinner";
import toast from "react-hot-toast";

const Buyer_seller = () => {
  const user = useParams();

  const {
    data: getUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", "seller"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_URL}/user/${user?.role}`).then((e) =>
        e.json()
      ),
  });

  useEffect(() => {
    refetch();
  }, [user.role]);

  const deleteSellerOrBuyer = (id) => {
    const url = `${process.env.REACT_APP_URL}/deleteUserByAdmin/${id}`;
    fetch(url, { method: "DELETE" })
      .then((e) => e.json())
      .then((data) => {
        toast.success("User deleted successfully");
        refetch();
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          {getUser.length <= 0 ? (
            <h1>There is no user </h1>
          ) : (
            <table className="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                  <th>Verify</th>
                </tr>
              </thead>
              <tbody className="">
                {/* <!-- row 1 --> */}
                {getUser.length &&
                  getUser.map((urs, i) => (
                    <tr key={urs._id}>
                      <th>{i + 1}</th>
                      <td>{urs.name}</td>
                      <td>{urs.email}</td>
                      <td>{urs.role}</td>
                      <td>
                        <button
                          onClick={() => deleteSellerOrBuyer(urs._id)}
                          className="btn-sm bg-orange-200"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button className="btn-sm bg-teal-300">Verify</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Buyer_seller;
