import React from "react";
import { Link } from "react-router-dom";
import "./bg_image.css";

const Error_page = () => {
  return (
    <div className="bg_img">
      <section className="flex items-center h-screen p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Link
              to="/home"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error_page;
