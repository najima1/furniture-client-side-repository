import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Authcontext/ContextProvider";

const ShowModal = ({ data, modal, setModal }) => {
  const { user, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { curr_price, date, name, _id, image } = data;

  const submitInformation = (data) => {
    const obj = {
      name: data.user_name,
      email: data.email,
      phone: data.phone,
      price: data.price,
      product_name: data.product_name,
      location: data.location,
      image: image,
      id: _id,
    };


    fetch(`${process.env.REACT_APP_URL}/purchaseOne`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((e) => e.json())
      .then((data) => {
        toast.success("Product purchase successfull");
        setModal(false);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* content */}

          <div>
            <form
              onSubmit={handleSubmit(submitInformation)}
              className="space-y-2"
            >
              <input
                defaultValue={user?.displayName}
                {...register("user_name")}
                readOnly
                className="bg-gray-200 p-2 w-full outline-none"
              />
              <input
                defaultValue={user?.email}
                {...register("email")}
                readOnly
                className="bg-gray-200 p-2 w-full outline-none"
              />
              <input
                defaultValue={name ? name : ""}
                {...register("product_name")}
                readOnly
                className="bg-gray-200 p-2 w-full outline-none"
              />
              <input
                defaultValue={curr_price ? curr_price : "00.00"}
                {...register("price")}
                readOnly
                className="bg-gray-200 p-2 w-full outline-none"
              />

              <input
                defaultValue=""
                placeholder="phone number"
                {...register("phone")}
                required
                className="bg-gray-200 p-2 w-full"
              />

              <input
                defaultValue=""
                placeholder="location"
                {...register("location")}
                required
                className="bg-gray-200 p-2 w-full"
              />

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-teal-400 py-2 block rounded-sm  w-56 mx-auto"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
