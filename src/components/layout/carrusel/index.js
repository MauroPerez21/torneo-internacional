import React from "react";
import Slider from "react-slick";
import './Carousel.styles.css'
import { data } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-frame">
    <Slider {...settings}>
    {data.map((item) =>
            <Card {...item} key={item.id}/>
                )}
    </Slider>

    </div>
    
  );
}