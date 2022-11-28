import React from "react";
import Category from "../Category/Category";
import SimpleSlider from "../HomeSlider/HomeSlider";
import Tab_section from "../Tab_section/Tab_section";

const Home = () => {
  return (
    <div className="relative">
      {/* banner */}
      <div>
        <SimpleSlider />
      </div>

      {/* category section */}
      <Category />

      {/* tab section */}
      <Tab_section />
    </div>
  );
};

export default Home;
