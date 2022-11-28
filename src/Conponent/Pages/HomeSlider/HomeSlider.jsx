import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../../image/1.png";
import banner2 from "../../image/2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container mx-auto py-6 md:py-16">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="" />
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
