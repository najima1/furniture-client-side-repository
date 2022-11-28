import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Category = () => {
  const { data: categoryData = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_URL}/category`).then((e) => e.json()),
  });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="my-16 bg-[#34495e]">
          <div className="container px-6 py-10 mx-auto ">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
              {categoryData.map((data) => (
                <div key={data._id} className="bg-white p-3 rounded">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80 shadow-xl"
                    src={data.image}
                    alt=""
                  />

                  <div className="mt-8">
                    <strong className="text-blue-500 uppercase">
                      {data.name}
                    </strong>

                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <a className="text-lg font-medium text-gray-900  hover:underline">
                          John snow
                        </a>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          February 1, 2022
                        </p>
                      </div>
                      <Link
                        to={`/home/${data.category}`.toLowerCase()}
                        className="inline-block text-blue-500 underline hover:text-blue-400"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Category;
