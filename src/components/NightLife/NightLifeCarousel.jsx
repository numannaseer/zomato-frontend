import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NightLifeCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite:false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite:false,
          initialSlide: 0
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://cdn.lifestyleasia.com/wp-content/uploads/2019/07/10010540/shutterstock_1346249921.jpg",
      title: "Microbreweries",
      places: "30 Places",
    },
    {
      image:
        "https://www.litbuzz.in/wp-content/uploads/2021/04/pexels-photo-1267360-850x560.jpg",
      title: "Best Bars & Pubs",
      places: "34 Places",
    },
    {
      image:
        "http://www.dineout.co.in/blog/wp-content/uploads/2017/08/shutterstock_404283955-700x468.jpg",
      title: "Night Clubs",
      places: "24 Places",
    }
  ])

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default NightLifeCarousel;
