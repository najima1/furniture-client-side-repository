import React from "react";
import Category from "../Category/Category";
import SimpleSlider from "../HomeSlider/HomeSlider";

const Home = () => {
  return (
    <div className="relative">
      {/* banner */}
      <div>
        <SimpleSlider />
      </div>

      {/* category section */}
      <Category />
    </div>
  );
};

export default Home;
